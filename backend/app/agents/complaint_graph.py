from typing import TypedDict

from langgraph.graph import StateGraph, END

from app.agents.nodes.extract_node import extract_complaint_node
from app.agents.nodes.summary_node import summary_node
from app.agents.nodes.root_cause_node import root_cause_node
from app.agents.nodes.capa_node import capa_node
from app.agents.nodes.risk_node import risk_node

from app.schemas.ai_schema import ComplaintExtraction


class ComplaintState(TypedDict):
    extracted_text: str
    extracted_data: ComplaintExtraction
    summary: str
    risk: str
    root_cause: str
    capa: str


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
