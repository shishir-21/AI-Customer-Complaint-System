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
