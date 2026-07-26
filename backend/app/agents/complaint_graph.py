from typing import TypedDict

from langgraph.graph import StateGraph, END
from app.services.ai_service import (
    extract_complaint_information,
    generate_summary,
    generate_root_cause,
    generate_capa,
    classify_risk,
)


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

def summary_node(state):

    state["summary"] = generate_summary(
        state["extracted_text"]
    )

    return state

def root_cause_node(state):

    state["root_cause"] = generate_root_cause(
        state["extracted_text"]
    )

    return state

def capa_node(state):

    state["capa"] = generate_capa(
        state["extracted_text"]
    )

    return state

def risk_node(state):

    state["risk"] = classify_risk(
        state["extracted_text"]
    )

    return state

workflow = StateGraph(ComplaintState)

workflow.add_node("extract", extract_complaint_node)
workflow.add_node("summary", summary_node)
workflow.add_node("root_cause", root_cause_node)
workflow.add_node("capa", capa_node)
workflow.add_node("risk", risk_node)

workflow.set_entry_point("extract")

workflow.add_edge("extract", "summary")
workflow.add_edge("summary", "root_cause")
workflow.add_edge("root_cause", "capa")
workflow.add_edge("capa", "risk")
workflow.add_edge("risk", END)

graph = workflow.compile()
