from app.agents.complaint_graph import graph

sample_text = """
Customer Name: Apollo Hospital

Product Name: Paracetamol 500mg

Batch Number: B123

Complaint:
Customer received broken tablets inside the strip.
"""

result = graph.invoke(
    {
        "extracted_text": sample_text,
        "extracted_data": {},
        "summary": "",
        "risk": "",
        "root_cause": "",
        "capa": ""
    }
)

print(result)
