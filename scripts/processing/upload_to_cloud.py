import os
import subprocess
import sys

# Install google-cloud-storage
subprocess.check_call([sys.executable, "-m", "pip", "install", "google-cloud-storage"])

from google.cloud import storage

# Set environment variable for authentication
os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'

# Initialize Google Cloud Storage client
client = storage.Client()
bucket_name = 'dataset_bucket_argon'
bucket = client.get_bucket(bucket_name)

# File path in Keboola (in -> files directory)
local_file_path = 'in/files/gymbeam_hackathon_00qhy3di1r.pdf'
destination_blob_name = 'dataset/your-file.pdf'  # Customize as needed

# Upload file to bucket
blob = bucket.blob(destination_blob_name)
blob.upload_from_filename(local_file_path)

print(f"File {local_file_path} uploaded to {destination_blob_name}.")
