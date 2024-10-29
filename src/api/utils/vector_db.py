from google.cloud import aiplatform
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'

# Initialize Vertex AI with your project and location
aiplatform.init(project="your-project-id", location="us-central1")  # Update with your project ID


def update_vector_db(embeddings, file_path):
    """Update the Vertex AI vector database with embeddings."""
    # Assuming embeddings is a list of vectors and file_path is used for reference
    vector_db = aiplatform.VectorStore("your_vector_store_id")  # Update with your vector store ID

    # You may need to format your embeddings to match the requirements of the vector DB
    # Here you would have logic to create an entry in your vector DB with the embeddings
    vector_db.add_entry(embeddings, metadata={"source": file_path})

    # Ensure to handle any errors during the update process
    print(f"Updated vector DB with embeddings for {file_path}")
