import google.generativeai as genai


def generate_topic_query(messages: list[str]):
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 40,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    prompt = "Suppose the most suitable document content to this conversation. Write its possible content in 500 tokens"

    # todo add prompts here
    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro-002",
        generation_config=generation_config,
        system_instruction=prompt,
    )

    chat_session = model.start_chat(
        history=messages
    )

    response = chat_session.send_message('What will be the possible document content?')

    return response.text


def generate_initial_topic_query(context_data: dict):
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 40,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    prompt = f"""
    Suppose the most suitable research document content.
    Your response will be used as a query to the vector database.
     
    You have the information about the user:
    {context_data}
    
    
    Write the possible content of the research in 500 tokens.
    """

    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro-002",
        generation_config=generation_config,
        system_instruction=prompt,
    )

    chat_session = model.start_chat(
        history=[]
    )

    response = chat_session.send_message('What will be the possible document content?')

    return response.text
