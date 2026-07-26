from app.services.ai_service import generate_capa


def capa_node(state):

    state["capa"] = generate_capa(
        state["extracted_text"]
    )

    return state
