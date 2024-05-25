from pydantic import BaseModel

class Nurse(BaseModel):
    username: str
    name: str
    gender: str
    phone: str
    email: str
    password: str
    role: str


class NurseLogin(BaseModel):
    role: str
    username: str
    password: str


    