FROM python:3.11.4-slim

WORKDIR /app

COPY requirements.txt requirements.txt

# Upgrade pip and setuptools
RUN pip install --upgrade pip setuptools

RUN pip install pybind11
RUN pip install uvicorn
RUN pip install fastapi
RUN pip install python-multipart
RUN pip install google-generativeai
RUN pip install chromadb
RUN pip install ollama
RUN pip install pdfplumber

# Clean up
RUN rm requirements.txt

COPY . .

WORKDIR /app

ARG api_key
ENV api_key $api_key

EXPOSE 8000

# Start the application
CMD ["uvicorn", "src.api.main:app", "--host", "0.0.0.0", "--port", "8000"]