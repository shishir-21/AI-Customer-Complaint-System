import os
import json

from dotenv import load_dotenv

from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate

load_dotenv()

llm = ChatGroq(
    model="llama-3.3-70b-versatile",
    api_key=os.getenv("GROQ_API_KEY"),
    temperature=0
)

prompt = ChatPromptTemplate.from_messages([
    (
        "system",
        """
You are an expert pharmaceutical complaint extraction assistant.

Extract the complaint information.

Return ONLY valid JSON.

Fields:

customer_name

product_name

product_strength

batch_number

complaint_description

initial_severity
"""
    ),
    ("human", "{text}")
])

chain = prompt | llm
