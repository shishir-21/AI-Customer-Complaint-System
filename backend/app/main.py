from fastapi import FastAPI

from app.database.init_db import create_tables

app = FastAPI(
    title="AI Complaint Management API"
)

@app.on_event("startup")
def startup():
    create_tables()

@app.get("/")
def home():
    return {
        "message": "Backend Running Successfully"
    }
    