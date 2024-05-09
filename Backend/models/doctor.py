from pydantic import BaseModel, Field

class Doctor(BaseModel):
    doctor_id: str = Field(..., alias="doctorId")
    name: str
    password: str
    gender: str
    specialization: str
    phone: str
    email: str