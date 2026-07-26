from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.schemas.complaint import (
    ComplaintCreate,
    ComplaintResponse,
)
from app.services.complaint_service import create_complaint

router = APIRouter(
    prefix="/api/v1/complaints",
    tags=["Complaints"]
)


@router.post(
    "/",
    response_model=ComplaintResponse,
    status_code=201
)
def create_new_complaint(
    complaint: ComplaintCreate,
    db: Session = Depends(get_db)
):
    return create_complaint(db, complaint)
