from pydantic import BaseModel

class Doctor(BaseModel):
    username: str
    name: str
    gender: str
    specialization: str
    phone: str
    email: str
    password: str
    role: str


class DoctorLogin(BaseModel):
    role: str
    username: str
    password: str


    