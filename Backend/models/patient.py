from pydantic import BaseModel

class Patient(BaseModel):
    username: str
    name: str
    gender: str
    phone: str
    email: str
    password: str
    role: str
    age: int
    blood_group: str
    weight: int
    attendant_name: str
    attendant_email: str
    attendant_phone: str


class PatientLogin(BaseModel):
    role: str
    username: str
    password: str


    