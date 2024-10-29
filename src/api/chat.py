from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from src.ai_wrapper import get_ai_response
import datetime

router = APIRouter()


class Message(BaseModel):
    text: str
    role: str
    time: datetime.datetime


# Request and Response Models
class ChatRequest(BaseModel):
    messages: list[Message]
    age: Optional[int] = None
    gender: Optional[str] = None
    weight: Optional[str] = None
    health_goals: Optional[str] = None
    activity_level: Optional[str] = None
    dietary_restrictions: Optional[str] = None


class ChatResponse(BaseModel):
    response: str
    time: datetime.datetime


# Chat Endpoint with Swagger Documentation
@router.post(
    "/api/chat",
    response_model=ChatResponse,
    summary="Chat with AI for Health Recommendations",
    description="This endpoint allows users to interact with the AI and receive personalized health recommendations based on the provided user profile data.",
    tags=["Chat"]
)
async def chat_endpoint(chat_request: ChatRequest):
    """
    Chat endpoint that receives user data and provides health recommendations.

    - **message**: The user's message or query.
    - **age**: Optional age of the user.
    - **gender**: Optional gender of the user.
    - **health_goals**: Optional health goals (e.g., "weight loss").
    - **activity_level**: Optional activity level (e.g., "sedentary", "active").
    - **dietary_restrictions**: Optional dietary restrictions (e.g., "vegan").

    Returns a response containing the AI-generated recommendation and suggested actions.
    """

    simplified_messages = [{"role": message.role, "content": message.text} for message in chat_request.messages]

    print(simplified_messages[:-1], simplified_messages[-1]["content"])

    ai_response_text = get_ai_response(simplified_messages[:-1], simplified_messages[-1]["content"], chat_request.age,
                                       chat_request.gender, chat_request.health_goals, chat_request.activity_level,
                                       chat_request.weight, chat_request.dietary_restrictions)
    ai_response = ChatResponse(response=ai_response_text, time=datetime.datetime.now())

    # todo should we return references as text in response
    # todo we need time, list of products ids, 
    # todo endpoint for current products by id
    # todo 

    return ai_response
