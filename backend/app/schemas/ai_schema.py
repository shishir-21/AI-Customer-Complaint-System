from pydantic import BaseModel


class ComplaintExtraction(BaseModel):
    customer_name: str = ""
    product_name: str = ""
    product_strength: str = ""
    batch_number: str = ""
    complaint_description: str = ""
    initial_severity: str = ""
    