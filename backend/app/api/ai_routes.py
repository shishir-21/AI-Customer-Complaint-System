from fastapi import APIRouter, UploadFile, File, HTTPException

from app.services.file_service import (
    save_uploaded_file,
    extract_text_from_pdf,
)
from app.schemas.text_request import DraftUpdateRequest, TextRequest

from app.agents.complaint_graph import draft_update_graph, graph

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
    "extracted_data": result["extracted_data"].model_dump(),
    "summary": result["summary"],
    "root_cause": result["root_cause"],
    "capa": result["capa"],
    "risk": result["risk"],
}

@router.post("/extract-text")
def extract_from_text(request: TextRequest):

    result = graph.invoke(
        {
            "extracted_text": request.text,
            "extracted_data": {},
            "summary": "",
            "risk": "",
            "root_cause": "",
            "capa": "",
        }
    )

    return {
        "extracted_data": result["extracted_data"].model_dump(),
        "summary": result["summary"],
        "root_cause": result["root_cause"],
        "capa": result["capa"],
        "risk": result["risk"],
    }


@router.post("/update-draft")
def update_draft(request: DraftUpdateRequest):

    result = draft_update_graph.invoke(
        {
            "current_form": request.current_form,
            "message": request.message,
            "changes": {},
            "reply": "",
        }
    )

    return {
        "changes": result["changes"],
        "reply": result["reply"],
    }
