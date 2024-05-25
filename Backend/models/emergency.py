from pydantic import BaseModel

class Emergency(BaseModel):
    doctor_id: str
    name: str
    patient_id: str
    time: str
    action: str 
    gender: str
    





    