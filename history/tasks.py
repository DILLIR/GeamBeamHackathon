from google.cloud import storage, aiplatform
import fitz  # PyMuPDF
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'

celery_app = Celery("tasks", broker="redis://localhost:6379/0")

# Initialize Google Cloud Storage and Vertex AI
BUCKET_NAME = "your-bucket-name"
BACKUP_BUCKET_NAME = "your-backup-bucket-name"
client = storage.Client()
bucket = client.bucket(BUCKET_NAME)
backup_bucket = client.bucket(BACKUP_BUCKET_NAME)

aiplatform.init(project="datahackaton-projekt-2", location="us-central1")
embedding_model = aiplatform.TextEmbeddingModel.from_pretrained("textembedding-gecko@003")
