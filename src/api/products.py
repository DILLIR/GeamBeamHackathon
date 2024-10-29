# utils/products.py

from fastapi import APIRouter, Query
from pydantic import BaseModel
from typing import List, Optional, Dict

router = APIRouter()


class Product(BaseModel):
    name: str
    category: str
    price: float
    rating: float
    dietary_info: str  # e.g., "vegan", "gluten-free"
    form: str  # e.g., "capsules", "powder"


class ProductsResponse(BaseModel):
    products: List[Product]


@router.get(
    "/api/products",
    response_model=ProductsResponse,
    summary="Get Products",
    description="Retrieve a list of products based on search criteria such as query, dietary restrictions, health goals, price range, rating, and format.",
    tags=["Products"]
)
async def get_products(
        query: str,
        dietary_restrictions: Optional[str] = None,
        goal: Optional[str] = None,
        price_range: Optional[Dict[str, float]] = None,
        rating: Optional[float] = Query(0.0, ge=0.0),  # Minimum rating, default to 0.0
        format: Optional[str] = None
):
    """
    Get a list of products based on specified criteria.

    - **query**: General search term to find relevant products (e.g., "protein powder").
    - **dietary_restrictions**: Optional filters for products suitable for specific diets (e.g., "vegan").
    - **goal**: Optional health goal or intent, such as "muscle gain" or "immune support".
    - **price_range**: Desired price range to help users find affordable options (e.g., {"min": 10, "max": 50}).
    - **rating**: Desired minimum rating for products (default is 0.0).
    - **format**: Optional preferred product type or form (e.g., "capsules", "powder").

    Returns a list of products that match the provided criteria.
    """
    # Here you would implement logic to search your product database.
    # For demonstration, we will return a mock list of products.

    mock_products = [
        Product(name="Whey Protein Powder", category="Protein", price=29.99, rating=4.5,
                dietary_info="none", form="powder"),
        Product(name="Vegan Protein Powder", category="Protein", price=24.99, rating=4.7,
                dietary_info="vegan", form="powder"),
        Product(name="Vitamin D Capsules", category="Vitamins", price=15.99, rating=4.8,
                dietary_info="none", form="capsules"),
        Product(name="Omega-3 Fish Oil", category="Supplements", price=19.99, rating=4.4,
                dietary_info="none", form="liquid"),
        # Add more mock products as needed
    ]

    # Apply filtering logic here based on the parameters received
    filtered_products = [
        product for product in mock_products
        if query.lower() in product.name.lower()
           and (
                       dietary_restrictions is None or dietary_restrictions.lower() in product.dietary_info.lower())
           and (goal is None or goal.lower() in product.category.lower())
           and (price_range is None or (price_range['min'] <= product.price <= price_range['max']))
           and product.rating >= rating
           and (format is None or format.lower() == product.form.lower())
    ]

    return ProductsResponse(products=filtered_products)
