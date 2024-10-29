import chromadb
# import chromadb.utils.embedding_functions as embedding_functions
import ollama
from typing import List


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


chroma_client = chromadb.Client()


# switch `create_collection` to `get_or_create_collection` to avoid creating a new collection every time
collection = chroma_client.get_or_create_collection(name="my_collection", embedding_function=OllamaEmbeddingFunction(model_name="mxbai-embed-large"))

# switch `add` to `upsert` to avoid adding the same documents every time
collection.upsert(
    documents=[
        "This is a test sentence.",
        "Find the best matching sentence from a list.",
        "This sentence is unrelated.",
        "Another sentence to check the match.",
    ],
    ids=["id1", "id2", "id3", "id4"]
)


if __name__ == "__main__":
    results = collection.query(
        query_texts=["Another phrase to verify the match."],  # Chroma will embed this for you
        n_results=2  # how many results to return
    )
    print(results)
