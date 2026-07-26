import json

from langchain_core.prompts import ChatPromptTemplate

from app.prompts.extract_prompt import SYSTEM_PROMPT
from app.prompts.summary_prompt import SUMMARY_PROMPT
from app.prompts.root_cause_prompt import ROOT_CAUSE_PROMPT
from app.prompts.capa_prompt import CAPA_PROMPT
from app.prompts.risk_prompt import RISK_PROMPT
from app.prompts.copilot_update_prompt import COPILOT_UPDATE_PROMPT

from app.services.groq_service import llm
from app.utils.json_parser import parse_llm_json


def extract_complaint_information(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", SYSTEM_PROMPT),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "text": text
        }
    )

    return parse_llm_json(response.content)


def generate_summary(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", SUMMARY_PROMPT),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "text": text
        }
    )

    return response.content


def generate_root_cause(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", ROOT_CAUSE_PROMPT),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "text": text
        }
    )

    return response.content


def generate_capa(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", CAPA_PROMPT),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "text": text
        }
    )

    return response.content


def classify_risk(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", RISK_PROMPT),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "text": text
        }
    )

    return response.content.strip()


def update_complaint_draft(current_form: dict, message: str) -> dict:

    prompt = ChatPromptTemplate.from_messages(
        [
            ("system", COPILOT_UPDATE_PROMPT),
            ("human", "Current draft: {current_form}\n\nUser message: {message}"),
        ]
    )

    chain = prompt | llm

    response = chain.invoke(
        {
            "current_form": json.dumps(current_form),
            "message": message,
        }
    )

    result = parse_llm_json(response.content)
    allowed_fields = {
        "customer_name",
        "product_name",
        "product_strength",
        "batch_number",
        "quantity_affected",
        "manufacturing_date",
        "expiry_date",
        "complaint_type",
        "complaint_description",
        "initial_severity",
        "priority",
        "complaint_source",
    }
    changes = result.get("changes", {})

    if not isinstance(changes, dict):
        raise ValueError("LLM returned an invalid draft update.")

    return {
        "changes": {
            key: value
            for key, value in changes.items()
            if key in allowed_fields
        },
        "reply": str(result.get("reply", "Draft reviewed.")),
    }
