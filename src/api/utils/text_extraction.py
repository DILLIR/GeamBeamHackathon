import fitz  # PyMuPDF

def extract_text_from_pdf(file_path):
    """Extract text from a PDF file."""
    text = ""
    with fitz.open(file_path) as pdf_document:
        for page in pdf_document:
            text += page.get_text()  # Extract text from each page

    # Clean the extracted text (optional)
    cleaned_text = clean_extracted_text(text)
    return cleaned_text

def clean_extracted_text(text):
    """Clean the extracted text by removing unwanted characters."""
    # Implement any cleaning logic here (e.g., removing extra whitespace)
    return " ".join(text.split())
