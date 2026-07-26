from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.file_service import (
    save_uploaded_file,
    extract_text_from_pdf,
)

router = APIRouter(
    prefix="/api/v1/upload",
    tags=["Upload"],
)


@router.post("/")
def upload_pdf(
    file: UploadFile = File(...)
):
    if not file.filename.endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    file_path = save_uploaded_file(file)

    extracted_text = extract_text_from_pdf(file_path)

    return {
        "filename": file.filename,
        "text": extracted_text,
    }
    