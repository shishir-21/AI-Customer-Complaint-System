from app.database.connection import engine
from app.database.base import Base

# Import all models
from app.models.complaint import Complaint


def create_tables():
    Base.metadata.create_all(bind=engine)
    