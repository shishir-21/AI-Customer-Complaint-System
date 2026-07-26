from app.schemas.ai_schema import ComplaintExtraction
from app.services.ai_service import extract_complaint_information


def extract_complaint_node(state):

    extracted = extract_complaint_information(
        state["extracted_text"]
    )

    state["extracted_data"] = ComplaintExtraction(**extracted)

    return state
