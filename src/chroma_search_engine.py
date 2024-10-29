import uuid

import chromadb
import ollama
from typing import List

from pathlib import Path

import pdfplumber
from chromadb import Settings

import re


class OllamaEmbeddingFunction:
    """
    This class is used to generate embeddings for a list of texts using the Ollama library.
    """

    def __init__(self, model_name: str) -> None:
        """
        Initialize the Ollama Embedding Function.

        Args:
            model_name (str): The name of the model to use for text embeddings. E.g. "mxbai-embed-large".
        """
        self._model_name = model_name

    def __call__(self, input: List[str]) -> List[List[float]]:
        """
        Get the embeddings for a list of texts.

        Args:
            input (List[str]): A list of texts to get embeddings for.

        Returns:
            List[List[float]]: The embeddings for the texts.

        Example:
            >>> ollama_ef = OllamaEmbeddingFunction(model_name="mxbai-embed-large")
            >>> texts = ["Hello, world!", "How are you?"]
            >>> embeddings = ollama_ef(texts)
        """
        # Call Ollama library's embeddings function for each document
        embeddings = [
            ollama.embeddings(model=self._model_name, prompt=text)["embedding"]
            for text in input
        ]
        return embeddings


def clean_text(text: str) -> str:
    return text


def extract_text_from_file(file_path: Path) -> str:
    with pdfplumber.open(file_path) as pdf:
        extracted_text = ""
        for page in pdf.pages:
            extracted_text += page.extract_text()
    return extracted_text


def split_text_into_chunks(text: str, phrases: int, overlap: int = 1) -> List[str]:
    """
    Splits text into chunks with specified phrases per chunk and some contextual overlap.

    :param text: The input text to split into chunks.
    :param phrases: Number of phrases per chunk.
    :param overlap: Number of phrases to overlap between chunks for context continuity.
    :return: A list of text chunks.
    """
    if phrases < 1 or overlap < 0:
        raise ValueError("Phrases must be at least 1, and overlap must be 0 or greater.")

    # Use regex to split into sentences, handling punctuation and typical sentence endings.
    sentences = re.split(r'(?<!\w\.\w.)(?<![A-Z][a-z]\.)(?<=\.|\?)\s', text)

    # Chunk sentences while maintaining some overlap for contextual continuity.
    chunks = []
    current_chunk = []
    phrase_count = 0

    for i, sentence in enumerate(sentences):
        current_chunk.append(sentence.strip())
        phrase_count += 1

        # If the current chunk reaches the desired phrase count, add it to chunks.
        if phrase_count >= phrases:
            chunks.append(" ".join(current_chunk))
            # Move back by `overlap` sentences to retain context in the next chunk.
            current_chunk = current_chunk[-overlap:] if overlap > 0 else []
            phrase_count = overlap

    # Include any remaining sentences as the final chunk.
    if current_chunk:
        chunks.append(" ".join(current_chunk))

    return chunks


def process_dataset_file(collection, file_path: Path):
    extracted_text = extract_text_from_file(file_path)
    cleaned_text = clean_text(extracted_text)
    chunks = split_text_into_chunks(cleaned_text, 5, 1)
    collection.upsert(
        documents=chunks,
        ids=[str(uuid.uuid4()) for _ in range(len(chunks))],
        metadatas=[{"file_path": str(file_path)} for _ in range(len(chunks))]
    )


def process_dataset_files(collection, dataset_directory: Path):
    for file_path in dataset_directory.iterdir():
        if file_path.suffix.lower() == ".pdf":
            process_dataset_file(collection, file_path)
        else:
            print(f"Skipping file: {file_path}")


def upload_all_data(chroma_collection_name: str, dataset_directory: Path):
    collection = get_collection(chroma_collection_name)
    process_dataset_files(collection, dataset_directory)


def get_collection(chroma_collection_name):
    chroma_client = chromadb.Client(Settings(persist_directory="./db", is_persistent=True))
    collection = chroma_client.get_or_create_collection(
        name=chroma_collection_name,
        embedding_function=OllamaEmbeddingFunction(
            model_name="mxbai-embed-large"
        ),
    )
    return collection


def get_document_file_path(chroma_collection_name: str, user_query: str, results_amount: int) -> list[str]:
    collection = get_collection(chroma_collection_name)
    results = collection.query(
        query_texts=[user_query],
        n_results=results_amount
    )
    if len(results["metadatas"]) == 0:
        return None
    return [current_metadata["file_path"] for current_metadata in results["metadatas"][0]]


def get_document_content(chroma_collection_name: str, user_query: str, results_amount: int) -> list[str]:
    pathes = set(get_document_file_path(chroma_collection_name, user_query, results_amount))
    return [extract_text_from_file(path) for path in pathes]
