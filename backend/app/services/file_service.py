import os
import fitz  # PyMuPDF


UPLOAD_FOLDER = "uploads"


def save_uploaded_file(file):
    """
    Save uploaded file to uploads folder.
    """

    os.makedirs(UPLOAD_FOLDER, exist_ok=True)

    file_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename
    )

    with open(file_path, "wb") as buffer:
        buffer.write(file.file.read())

    return file_path


def extract_text_from_pdf(file_path):
    """
    Extract text from PDF using PyMuPDF.
    """

    document = fitz.open(file_path)

    text = ""

    for page in document:
        text += page.get_text()

    document.close()

    return text
