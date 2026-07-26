from typing import TypedDict

from langgraph.graph import StateGraph, END
from app.services.ai_service import extract_complaint_information


class ComplaintState(TypedDict):
    extracted_text: str
    extracted_data: dict
    summary: str
    risk: str
    root_cause: str
    capa: str


def extract_complaint_node(state):

    extracted = extract_complaint_information(
        state["extracted_text"]
    )

    state["extracted_data"] = extracted

    return state


workflow = StateGraph(ComplaintState)

workflow.add_node(
    "extract",
    extract_complaint_node
)

workflow.set_entry_point("extract")

workflow.add_edge(
    "extract",
    END
)

graph = workflow.compile()
