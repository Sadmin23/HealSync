from pydantic import BaseModel, Field

class Nurse(BaseModel):
    nurse_id: str = Field(..., alias="nurseId")
    name: str
    password: str
    gender: str
    phone: str
    email: str