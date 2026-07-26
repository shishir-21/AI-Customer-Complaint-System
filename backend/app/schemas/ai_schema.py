from pydantic import BaseModel


class ComplaintExtraction(BaseModel):
    customer_name: str = ""
    product_name: str = ""
    product_strength: str = ""
    batch_number: str = ""
    quantity_affected: str = ""
    manufacturing_date: str = ""
    expiry_date: str = ""
    complaint_type: str = ""
    complaint_description: str = ""
    initial_severity: str = ""
