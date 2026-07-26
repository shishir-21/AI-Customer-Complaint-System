import json
import re


def parse_llm_json(response: str) -> dict:

    response = response.strip()

    response = re.sub(r"^```json", "", response, flags=re.IGNORECASE)
    response = re.sub(r"^```", "", response)
    response = re.sub(r"```$", "", response)

    response = response.strip()

    try:
        return json.loads(response)

    except json.JSONDecodeError:
        raise ValueError(
            "LLM returned invalid JSON."
        )
        