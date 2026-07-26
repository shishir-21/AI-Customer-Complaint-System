import json

from langchain_core.prompts import ChatPromptTemplate

from app.prompts.extract_prompt import SYSTEM_PROMPT
from app.prompts.summary_prompt import SUMMARY_PROMPT
from app.prompts.root_cause_prompt import ROOT_CAUSE_PROMPT
from app.prompts.capa_prompt import CAPA_PROMPT
from app.prompts.risk_prompt import RISK_PROMPT

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
