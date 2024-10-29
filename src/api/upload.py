# upload.py

from fastapi import APIRouter, UploadFile, File, HTTPException
from typing import List
import os

os.environ['GOOGLE_APPLICATION_CREDENTIALS'] = 'datahackaton-projekt-2-5e5b5288a5fd.json'
router = APIRouter()


@router.post(
    "/api/upload",
    summary="Upload Files",
    description="Upload multiple files to Google Cloud Storage and initiate processing.",
    tags=["Upload"]
)
async def upload_files(
        files: List[UploadFile] = File(..., description="List of files to upload.")
):
    """
    Upload multiple files to Google Cloud Storage.

    - **files**: A list of files to be uploaded. If no files are provided, a 400 error is raised.

    Returns a success message and details of uploaded files.
    """
    # Check if any files are provided
    # if not files:
    #     raise HTTPException(status_code=400, detail="No files provided.")

    # upload_responses = []

    # for file in files:
    #     # Upload file to Google Cloud Storage
    #     upload_response = await upload_to_bucket(file)
    #     upload_responses.append(upload_response)

    #     # Start processing each uploaded file with Celery
    #     initiate_pdf_processing(upload_response["file_path"])  # file_path is the GCS path

    pass
    # return {"message": "Files uploaded and processing initiated.", "files": upload_responses}
