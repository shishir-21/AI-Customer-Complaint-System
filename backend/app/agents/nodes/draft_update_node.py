from app.services.ai_service import update_complaint_draft


def draft_update_node(state):

    result = update_complaint_draft(
        state["current_form"],
        state["message"],
    )

    state["changes"] = result["changes"]
    state["reply"] = result["reply"]

    return state
