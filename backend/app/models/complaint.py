from sqlalchemy import Column, Integer, String, Date, Text, DateTime
from sqlalchemy.sql import func

from app.database.base import Base


class Complaint(Base):
    __tablename__ = "complaints"

    id = Column(Integer, primary_key=True, index=True)

    complaint_source = Column(String(100), nullable=False)
    customer_name = Column(String(255), nullable=False)

    product_name = Column(String(255), nullable=False)
    product_strength = Column(String(100))
    batch_number = Column(String(100))

    manufacturing_date = Column(Date)
    expiry_date = Column(Date)

    quantity_affected = Column(String(100))

    complaint_type = Column(String(100))
    complaint_date = Column(Date)

    complaint_description = Column(Text)

    initial_severity = Column(String(50))
    priority = Column(String(50))

    ai_summary = Column(Text)
    ai_root_cause = Column(Text)
    ai_capa = Column(Text)
    ai_risk = Column(String(100))

    created_at = Column(DateTime(timezone=True), server_default=func.now())
    