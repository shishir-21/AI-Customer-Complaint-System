from app.services.ai_service import generate_summary


def summary_node(state):

    state["summary"] = generate_summary(
        state["extracted_text"]
    )

    return state
