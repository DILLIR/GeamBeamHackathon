import pdfplumber
import re
from google.cloud import storage
from sentence_transformers import SentenceTransformer
import os
from pinecone import Pinecone, ServerlessSpec

# Set up Google Cloud credentials
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'


# Function to clean text
def clean_text(text):
    # Remove special characters and numbers
    text = re.sub(r'[^A-Za-zÀ-ž0-9\s]+', '', text)
    # Convert to lowercase
    text = text.lower()
    # Remove extra whitespace
    text = ' '.join(text.split())
    return text


# Function to upload files to Google Cloud Storage
def upload_to_gcs(bucket_name, source_file_name, destination_blob_name):
    """Uploads a file to the bucket."""
    storage_client = storage.Client()
    bucket = storage_client.bucket(bucket_name)
    blob = bucket.blob(destination_blob_name)
    blob.upload_from_filename(source_file_name)


# Extract text from PDF
with pdfplumber.open("files/00QHY3DI1R.pdf") as pdf:
    extracted_text = ""
    for page in pdf.pages:
        extracted_text += page.extract_text()

# Clean the extracted text
cleaned_text = clean_text(extracted_text)

# Load the Sentence Transformer model (with 768 dimensions)
model = SentenceTransformer('all-mpnet-base-v2')

# Convert cleaned text into vectors
vector = model.encode([cleaned_text])  # Vectorize the cleaned text

# Initialize Pinecone
pc = Pinecone(api_key='e4de9b4e-7adb-43a2-8541-d7a5aaa7e380')

# Check if the index exists and create it if it doesn't
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

# Connect to your index
index = pc.Index(index_name)

# Prepare the vector for upsertion
vector_id = "pdf_vector_1"  # Give a unique ID for the vector
index.upsert(vectors=[(vector_id, vector[0])])  # Upsert the vector into the index

print("Vector uploaded successfully.")

# Perform a test query
query_text = "Your query text here about health or nutrition."  # Replace with your actual query text
query_vector = model.encode([query_text])[0].tolist()  # Convert to list

# Debug: Check the generated query vector
print("Query Vector:", query_vector)  # Ensure this is a valid list of floats

# Ensure that the vector is not empty
if not query_vector:
    print("Error: The query vector is empty.")
else:
    # Query the index for similar vectors
    results = index.query(query_vector=query_vector, top_k=5)  # Adjust top_k as needed

    # Print the results
    print("Query Results:")
    for match in results['matches']:
        print(f"ID: {match['id']}, Score: {match['score']}")
