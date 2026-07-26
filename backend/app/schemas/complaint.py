from datetime import date
from pydantic import BaseModel


class ComplaintCreate(BaseModel):
    complaint_source: str
    customer_name: str
    product_name: str
    product_strength: str | None = None
    batch_number: str | None = None

    manufacturing_date: date | None = None
    expiry_date: date | None = None

    quantity_affected: str | None = None

    complaint_type: str | None = None
    complaint_date: date | None = None

    complaint_description: str

    initial_severity: str | None = None
    priority: str | None = None
    
class ComplaintResponse(ComplaintCreate):
    id: int

    ai_summary: str | None = None
    ai_root_cause: str | None = None
    ai_capa: str | None = None
    ai_risk: str | None = None

    class Config:
        from_attributes = True
        