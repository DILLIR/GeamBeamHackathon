from src.chroma_search_engine import get_document_content
from src.topic_query_generator import generate_topic_query, generate_initial_topic_query
import google.generativeai as genai


collection = 'hackathon-test-collection'
product_collection = 'hackathon-test-collection-products'


def get_ai_response(messages: list, user_message: str, age: str, gender: str, goals: str, activity_level: str,
                    weight: str, dietary_restrictions: str):
    generation_config = {
        "temperature": 1,
        "top_p": 0.95,
        "top_k": 40,
        "max_output_tokens": 8192,
        "response_mime_type": "text/plain",
    }

    context_data = (
        f"Age: {age}\n"
        f"Gender: {gender}\n"
        f"Weight: {weight}"
        f"Health Goals: {goals}\n"
        f"Activity Level: {activity_level}\n"
        f"Dietary Restrictions: {dietary_restrictions}\n"
    )

    if len(messages) == 0:
        real_documents = get_document_content(collection, generate_initial_topic_query(context_data), 2)
    else:
        real_documents = get_document_content(collection, generate_topic_query(context_data), 2)

    print('real documents', real_documents)

    prompt = f"""Image you are a gym coach. Help the user with his goals, considering the next information:\n
                {context_data}

                The list of researches which may help you: 
                {real_documents}

                Format your response in Slovak like with the following structure (example):
                
                Recommendation: Whey protein, Creatine 
                Dosage: 25g whey protein after each workout, 5g creatine daily 
                Literature sources: „Effect of whey protein on muscle protein synthesis in humans: An overview“ (PubMed ID: 123456); „Creatine supplementation and exercise performance: an updated meta-analysis“ (NIH ID: 234567).   
            """

    model = genai.GenerativeModel(
        model_name="gemini-1.5-pro-002",
        generation_config=generation_config,
        system_instruction=prompt,
    )

    print('messages', messages)

    chat_session = model.start_chat(
        history=messages
    )

    print('user_message', user_message)

    response = chat_session.send_message(user_message)
    print('response', response)

    return response.text
