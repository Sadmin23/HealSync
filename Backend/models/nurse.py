from pydantic import BaseModel, Field

class Nurse(BaseModel):
    nurse_id: str = Field(..., alias="nurseId")
    name: str
    gender: str
    phone: str
    email: str