from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.file_service import (
    save_uploaded_file,
    extract_text_from_pdf,
)

from app.agents.complaint_graph import graph

router = APIRouter(
    prefix="/api/v1/ai",
    tags=["AI"],
)


@router.post("/extract")
def extract_from_pdf(
    file: UploadFile = File(...)
):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are allowed."
        )

    file_path = save_uploaded_file(file)

    extracted_text = extract_text_from_pdf(file_path)

    result = graph.invoke(
        {
            "extracted_text": extracted_text,
            "extracted_data": {},
            "summary": "",
            "risk": "",
            "root_cause": "",
            "capa": ""
        }
    )

    return {
    "extracted_data": result["extracted_data"],
    "summary": result["summary"],
    "root_cause": result["root_cause"],
    "capa": result["capa"],
    "risk": result["risk"],
    }
