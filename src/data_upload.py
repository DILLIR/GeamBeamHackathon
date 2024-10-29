from pathlib import Path

import pdfplumber
import re
from google.cloud import storage
from sentence_transformers import SentenceTransformer
from pinecone import Pinecone, ServerlessSpec


def clean_text(text: str) -> str:
    # Remove special characters and numbers
    text = re.sub(r'[^A-Za-zÀ-ž0-9\s]+', '', text)
    # Convert to lowercase
    text = text.lower()
    # Remove extra whitespace
    text = ' '.join(text.split())
    return text


def upload_to_gcs(bucket_name: str, source_file_name: str, destination_blob_name: str):
    """Uploads a file to the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)


def extract_text_from_file(file_path: Path) -> str:
    with pdfplumber.open(file_path) as pdf:
        extracted_text = ""
        for page in pdf.pages:
            extracted_text += page.extract_text()
    return extracted_text


def process_dataset_file(file_path: Path):
    extracted_text = extract_text_from_file(file_path)
    cleaned_text = clean_text(extracted_text)
    model = SentenceTransformer('all-mpnet-base-v2')
    vector = model.encode([cleaned_text])
    pc = Pinecone(api_key='e4de9b4e-7adb-43a2-8541-d7a5aaa7e380')

    index_name = 'health-advisor'  # Replace with your desired index name
    if index_name not in pc.list_indexes().names():
        pc.create_index(
            name=index_name,
            dimension=768,  # Ensure this matches your vector dimension
            metric='euclidean',
            spec=ServerlessSpec(
                cloud='aws',
                region='eu-north-1'  # Adjust as necessary for your cloud provider
            )
        )

    index = pc.Index(index_name)

    vector_id = str(file_path)  # Give a unique ID for the vector
    index.upsert(vectors=[(vector_id, vector[0])])  # Upsert the vector into the index


def process_dataset_files(dataset_directory: Path):
    for file_path in dataset_directory.iterdir():
        if file_path.suffix.lower() == ".pdf":
            process_dataset_file(file_path)
        else:
            print(f"Skipping file: {file_path}")


def upload_all_data(dataset_directory: Path):
    process_dataset_files(dataset_directory)
