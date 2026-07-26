from typing import Any

from pydantic import BaseModel, Field


class TextRequest(BaseModel):
    text: str
    current_form: dict[str, Any] = Field(default_factory=dict)


class DraftUpdateRequest(BaseModel):
    current_form: dict[str, Any] = Field(default_factory=dict)
    message: str
