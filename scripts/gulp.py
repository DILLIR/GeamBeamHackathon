import os
import time
import zipfile
import logging
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from google.cloud import storage
from tqdm import tqdm

logging.basicConfig(filename='upload_logs.log', level=logging.INFO)

MAX_RETRIES = 3
RETRY_DELAY = 5  # Seconds between retries
CHUNK_SIZE = 8 * 1024 * 1024  # 8 MB - For resumable uploads
PROCESSED_FILES_LOG = "processed_files.log"


def load_processed_files():
    """Load the set of already processed files from the log file."""
    if os.path.exists(PROCESSED_FILES_LOG):
        with open(PROCESSED_FILES_LOG, "r") as f:
            return set(line.strip() for line in f)
    return set()


def update_processed_files(files):
    """Append the list of files to the processed files log."""
    with open(PROCESSED_FILES_LOG, "a") as f:
        for file in files:
            f.write(f"{file}\n")


def create_zip_file(files, zip_path):
    """Compress a list of files into a ZIP file."""
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
        for file in files:
            zipf.write(file, arcname=os.path.basename(file))
    return zip_path


def upload_file(bucket_name, file_path, retries=MAX_RETRIES):
    """Upload a single file (e.g., ZIP) to Google Cloud Storage with retries."""
    client = storage.Client()
    bucket = client.bucket(bucket_name)
    blob = bucket.blob(os.path.basename(file_path))
    blob.chunk_size = CHUNK_SIZE

    attempt = 0
    while attempt < retries:
        try:
            blob.upload_from_filename(file_path, timeout=600)
            logging.info(f"Uploaded {file_path} successfully.")
            return file_path  # Success
        except Exception as e:
            logging.warning(f"Attempt {attempt + 1} failed for {file_path}: {e}")
            attempt += 1
            time.sleep(min(60, RETRY_DELAY * 2 ** attempt))

    logging.error(f"Failed to upload {file_path} after {MAX_RETRIES} retries.")
    return None


def bulk_zip_and_upload(bucket_name, folder_path, zip_size_limit_mb, max_workers=5):
    """Zip and upload PDF files from a specified folder to Google Cloud Storage in batches."""
    zip_size_limit = zip_size_limit_mb * 1024 * 1024  # Convert MB to bytes

    # Load already processed files
    processed_files = load_processed_files()

    # List unprocessed PDF files in the folder
    pdf_files = [os.path.join(folder_path, f) for f in os.listdir(folder_path) if
                 f.endswith('.pdf') and f not in processed_files]
    if not pdf_files:
        print("No new PDF files found to upload.")
        return

    # Split files into batches to control ZIP file size
    file_batches = []
    current_batch = []
    current_size = 0

    for file in pdf_files:
        file_size = os.path.getsize(file)
        if current_size + file_size > zip_size_limit and current_batch:
            file_batches.append(current_batch)
            current_batch = []
            current_size = 0
        current_batch.append(file)
        current_size += file_size
    if current_batch:
        file_batches.append(current_batch)

    successful_uploads = []
    failed_uploads = []

    with ThreadPoolExecutor(max_workers=max_workers) as executor:
        futures = []
        for i, batch in enumerate(file_batches):
            zip_path = os.path.join(folder_path, f"batch_{i + 1}.zip")
            create_zip_file(batch, zip_path)
            futures.append(executor.submit(upload_file, bucket_name, zip_path))

        for future in tqdm(as_completed(futures), total=len(futures), desc="Uploading ZIPs"):
            try:
                result = future.result()
                if result:
                    successful_uploads.append(result)
                    update_processed_files(
                        [os.path.basename(file) for file in file_batches[i]])  # Mark files as processed
                else:
                    failed_uploads.append(result)
            except Exception as e:
                logging.error(f"Unexpected error with uploading ZIP file: {e}")
                failed_uploads.append(result)

    print("\nUpload Summary:")
    print(f"Successful uploads: {len(successful_uploads)}")
    print(f"Failed uploads: {len(failed_uploads)}")
    if failed_uploads:
        print("The following files failed to upload:")
        for failed_file in failed_uploads:
            print(f" - {failed_file}")


def main():
    parser = argparse.ArgumentParser(description="Bulk upload PDFs to Google Cloud Storage as ZIP files.")
    parser.add_argument("bucket_name", type=str, help="The name of the Google Cloud Storage bucket.")
    parser.add_argument("folder_path", type=str, help="The local folder path containing PDF files.")
    parser.add_argument("--max_workers", type=int, default=5, help="Maximum number of concurrent uploads.")
    parser.add_argument("--zip_size_limit", type=int, default=50, help="Maximum ZIP file size in MB.")

    args = parser.parse_args()

    if not os.getenv("GOOGLE_APPLICATION_CREDENTIALS"):
        print("Error: Please set the GOOGLE_APPLICATION_CREDENTIALS environment variable with your JSON key path.")
        return

    bulk_zip_and_upload(args.bucket_name, args.folder_path, args.zip_size_limit, max_workers=args.max_workers)


if __name__ == "__main__":
    main()
