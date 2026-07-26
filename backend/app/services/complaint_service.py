from sqlalchemy.orm import Session

from app.models.complaint import Complaint
from app.schemas.complaint import ComplaintCreate


def create_complaint(
    db: Session,
    complaint: ComplaintCreate
):
    db_complaint = Complaint(
        complaint_source=complaint.complaint_source,
        customer_name=complaint.customer_name,
        product_name=complaint.product_name,
        product_strength=complaint.product_strength,
        batch_number=complaint.batch_number,
        manufacturing_date=complaint.manufacturing_date,
        expiry_date=complaint.expiry_date,
        quantity_affected=complaint.quantity_affected,
        complaint_type=complaint.complaint_type,
        complaint_date=complaint.complaint_date,
        complaint_description=complaint.complaint_description,
        initial_severity=complaint.initial_severity,
        priority=complaint.priority
    )

    db.add(db_complaint)
    db.commit()
    db.refresh(db_complaint)

    return db_complaint
