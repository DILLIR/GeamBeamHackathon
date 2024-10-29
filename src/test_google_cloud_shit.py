import os
import chromadb
from src.chroma_search_engine import upload_all_data, get_document_file_path
from src.confiuration import load_config, save_config
from src.data_upload import clean_text
import google.generativeai as genai
from src.chroma_search_engine import OllamaEmbeddingFunction



# init vector database


# roles: user, system, assistent
# init genai

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/plain",
}


# todo add prompts here
model = genai.GenerativeModel(
  model_name="gemini-1.5-pro-002",
  generation_config=generation_config,
  system_instruction="Respond respectfully. Add a question mark after each message",
)

chat_session = model.start_chat(
  history=[
      {
      "role": "user",
      "parts": [
        "Hello\n",
      ],
    },
    {
      "role": "model",
      "parts": [
        "Hello?\n",
      ],
    },
  ]
)

def start_chatting_loop():
    while True:

        user_input = clean_text(input('User: '))

        if user_input == 'Quit':
            exit(1)



        response_data = get_document_file_path('hackathon-test-collection', user_input, 1)
        print('received data', response_data)

        # process request
        # history.append('User: ' + user_input)
        # function = OllamaEmbeddingFunction(model_name="mxbai-embed-large")
        # embeddings = function.__call__([user_input]) 

        # where to put embeddings
        # response_vector = embeddingModel.query(
            # query_texts=["Another phrase to verify the match."],  # Chroma will embed this for you
            # n_results=2  # how many results to return
        # )


        # embed vectors into chat


        # response = chat_session.send_message('Hello, nigga')
        # print(response.text)





# todo a class for a state, for history: session.  

if __name__ == "__main__":

    # upload files which need to be uploaded once
    # todo do we need to upload all the files to vector database

    # upload_all_data() # todo: finish 

    # run repeating tasks
    start_chatting_loop()    


    # main1()
