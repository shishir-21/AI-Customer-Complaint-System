from app.services.ai_service import classify_risk


def risk_node(state):

    state["risk"] = classify_risk(
        state["extracted_text"]
    )

    return state
