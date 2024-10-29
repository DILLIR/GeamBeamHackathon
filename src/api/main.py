from pathlib import Path

from fastapi import FastAPI
from src.api.chat import router as chat_router
from src.api.upload import router as upload_router
from src.api.recommendations import router as recommendations_router
from src.api.products import router as products_router
import os
import google.generativeai as genai
from fastapi.middleware.cors import CORSMiddleware
from src.chroma_search_engine import upload_all_data

collection = "hackathon-gymbeam"


if not os.path.exists('./db'):
    upload_all_data(collection, Path("./dataset"))


genai.configure(api_key=os.environ["api_key"])
app = FastAPI(
    title="Health Recommendations API",
    description="API for generating health recommendations and managing products.",
    version="1.0.0",
    terms_of_service="http://example.com/terms/",
    license_info={
        "name": "MIT License",
        "url": "https://opensource.org/licenses/MIT",
    },
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# Include routers for different functionalities
app.include_router(chat_router)
app.include_router(upload_router)
app.include_router(recommendations_router)
app.include_router(products_router)


@app.get("/")
def read_root():
    return {"message": "Welcome to the Health Recommendations API!"}

# To run the app, use the command: uvicorn main:app --reload
