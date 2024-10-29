from celery import Celery
from src.api.utils.text_extraction import \
    extract_text_from_pdf  # Assume this function uses fitz to extract text
from src.api.utils.vertex_ai import embed_text
from src.api.utils.cloud_storage import backup_vector_data
from src.api.utils.vector_db import update_vector_db

celery_app = Celery("tasks", broker="redis://localhost:6379/0")


@celery_app.task
def initiate_pdf_processing(file_path):
    # Queue 1: Extract text from PDF
    text = extract_text_from_pdf(file_path)

    # Queue 2: Embed text with Vertex AI
    embeddings = embed_text(text)

    # Queue 3: Backup embeddings to cloud storage
    backup_vector_data(embeddings, file_path)

    # Queue 4: Update vector database
    update_vector_db(embeddings, file_path)
