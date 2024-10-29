from pathlib import Path
import fitz
import pymupdf
from google.cloud import aiplatform, firestore
from vertexai.language_models import TextEmbeddingInput, TextEmbeddingModel

# Initialize Google Cloud AI Platform and Firestore
aiplatform.init(project="datahackaton-projekt-3", location="us-east1")
model_id = "text-multilingual-embedding-002"
firestore_client = firestore.Client()

project_id = "datahackaton-projekt-3"
location = "europe-west3"
index_name = "argon-bravo-index"
index_endpoint_id = "argon-bravo-index-1"


def extract_pdf_text(pdf_path: Path) -> str:
    with pymupdf.open(pdf_path) as doc:
        text = "".join(page.get_text() for page in doc)
    return text


def text_chunks(text: str, chunk_size: int = 1000) -> list[str]:
    return [text[i: i + chunk_size] for i in range(0, len(text), chunk_size)]


def embed_text(texts: list[str]) -> list[list[float]]:
    """Embeds texts with a pre-trained model and returns the embeddings."""
    dimensionality = 256
    task = "RETRIEVAL_DOCUMENT"
    model = TextEmbeddingModel.from_pretrained(model_id)

    inputs = [TextEmbeddingInput(text, task) for text in texts]
    kwargs = {"output_dimensionality": dimensionality} if dimensionality else {}
    embeddings = model.get_embeddings(inputs, **kwargs)

    return [embedding.values for embedding in embeddings]


def save_embeddings_to_index(embeddings: list[list[float]], file: str):
    """Saves embeddings to the specified index endpoint."""
    my_index_endpoint = aiplatform.MatchingEngineIndex(index_name=index_name)

    # Check if embeddings are valid
    if not embeddings or not all(isinstance(embed, list) and len(embed) == 256 for embed in embeddings):
        raise ValueError("Embeddings are invalid or do not match the required dimensionality.")

    # Prepare the request to insert embeddings into the index
    datapoints = []
    for idx, current_embedding in enumerate(embeddings):
        datapoints.append({
            "datapointId": f"{file}-{idx}",  # Unique identifier for the datapoint
            "featureVector": current_embedding,  # Assuming the embedding is a flat list
            "sparseEmbedding": {
                "values": current_embedding,  # Assuming this is the correct format
                "dimensions": ["256" for _ in range(len(current_embedding))]  # Use an integer instead of a list
            },
            "restricts": [{
                "namespace": "hackathon",
                "allowList": [],
                "denyList": []
            }],
            "numericRestricts": [],
            "crowdingTag": {
                "crowdingAttribute": "15"
            }
        })

    upsert_response = my_index_endpoint.upsert_datapoints(datapoints)
    print(f"Upsert response: {upsert_response}")


def process_dataset_file(file_path: Path):
    text = extract_pdf_text(file_path)
    chunks = text_chunks(text)
    embeddings = embed_text(chunks)
    save_embeddings_to_index(embeddings, str(file_path))


def process_dataset_files(dataset_directory: Path):
    for file_path in dataset_directory.iterdir():
        if file_path.suffix.lower() == ".pdf":
            process_dataset_file(file_path)
        else:
            print(f"Skipping file: {file_path}")


def workflow(dataset_directory: Path) -> None:
    process_dataset_files(dataset_directory)


if __name__ == "__main__":
    pdf_path = Path("/Volumes/Transcend/data-hackaton/dataset")
    workflow(pdf_path)
