import os
import json

from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

from app.prompts.complaint_prompt import SYSTEM_PROMPT

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
    temperature=0
)

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

    return json.loads(response.content)

def generate_summary(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                "Summarize this pharmaceutical complaint in 2-3 sentences."
            ),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke({"text": text})

    return response.content

def generate_root_cause(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                "Identify the most likely root cause of this complaint."
            ),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke({"text": text})

    return response.content

def generate_capa(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                "Suggest CAPA (Corrective and Preventive Actions)."
            ),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke({"text": text})

    return response.content

def classify_risk(text: str):

    prompt = ChatPromptTemplate.from_messages(
        [
            (
                "system",
                """
Classify pharmaceutical complaint risk.

Return ONLY one word.

Low

Medium

High
"""
            ),
            ("human", "{text}")
        ]
    )

    chain = prompt | llm

    response = chain.invoke({"text": text})

    return response.content.strip()
