from google.cloud import storage
import os

# os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'

# Initialize the Google Cloud Storage client
storage_client = storage.Client()

BUCKET_NAME = os.getenv("GCS_BUCKET_NAME")  # Set your bucket name as an environment variable


async def upload_to_bucket(file):
    """Upload a file to Google Cloud Storage."""
    bucket = storage_client.bucket(BUCKET_NAME)
    blob = bucket.blob(file.filename)

    # Upload the file
    blob.upload_from_file(file.file)

    # Log the upload
    return {
        "filename": file.filename,
        "file_path": f"gs://{BUCKET_NAME}/{file.filename}",
        "upload_time": "some timestamp",  # You may want to add a timestamp here
    }


def backup_vector_data(embeddings, file_path):
    """Backup vector data to a designated bucket."""
    bucket = storage_client.bucket(BUCKET_NAME)
    blob = bucket.blob(f"backup/{os.path.basename(file_path)}.vector")

    # Upload the embeddings as a JSON or binary file
    blob.upload_from_string(embeddings)  # Adjust based on how you serialize the embeddings
