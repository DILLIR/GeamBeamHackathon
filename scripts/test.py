from pathlib import Path
import fitz  # PyMuPDF
from google.cloud import aiplatform, firestore
from vertexai.language_models import TextEmbeddingInput, TextEmbeddingModel

# Initialize Google Cloud AI Platform and Firestore
project_id = "datahackaton-projekt-3"
location = "europe-west3"
aiplatform.init(project=project_id, location=location)
model_id = "text-multilingual-embedding-002"
firestore_client = firestore.Client()

index_endpoint_id = "argon-bravo-index-1"  # Replace with your actual index endpoint ID
deployed_index_id = "argon-bravo-index"  # Replace with your actual deployed index ID


def extract_pdf_text(pdf_path: Path) -> str:
    with fitz.open(pdf_path) as doc:
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
    embeddings = model.get_embeddings(inputs, output_dimensionality=dimensionality)

    return [embedding.values for embedding in embeddings]


def save_embeddings_to_index(embeddings: list[list[float]], file: str):
    """Saves embeddings to the specified index endpoint."""
    # Construct the full resource name for the index endpoint
    index_endpoint_resource_name = (
        f"projects/{project_id}/locations/{location}/indexEndpoints/{index_endpoint_id}"
    )

    # Create a MatchingEngineIndexEndpoint object
    my_index_endpoint = aiplatform.MatchingEngineIndexEndpoint(
        index_endpoint_name=index_endpoint_resource_name
    )

    # Prepare the datapoints for upsert
    datapoints = []
    for idx, current_embedding in enumerate(embeddings):
        datapoint = aiplatform.MatchingEngineIndexEndpoint.Datapoint(
            datapoint_id=f"{file}-{idx}",
            feature_vector=current_embedding,
        )
        datapoints.append(datapoint)

    try:
        # Perform the upsert operation
        upsert_response = my_index_endpoint.upsert_datapoints(
            deployed_index_id=deployed_index_id,
            datapoints=datapoints,
        )
        print(f"Upsert response: {upsert_response}")
    except Exception as e:
        print(f"Error during upsert: {e}")


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
