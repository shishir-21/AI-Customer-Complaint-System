from app.services.ai_service import generate_root_cause


def root_cause_node(state):

    state["root_cause"] = generate_root_cause(
        state["extracted_text"]
    )

    return state
