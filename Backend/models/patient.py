# models/patient.py
from pydantic import BaseModel, Field

class Patient(BaseModel):
    patient_id: str = Field(..., alias="patientId")
    name: str
    password: str
    gender: str
    age: int
    weight: str
    blood_group: str = Field(..., alias="bloodGroup")
    phone: str
    email: str
    attendant_name: str = Field(..., alias="attendantName")
    attendant_phone: str = Field(..., alias="attendantPhone")
    attendant_email: str = Field(..., alias="attendantEmail")