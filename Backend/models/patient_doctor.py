from pydantic import BaseModel

class PatientDoctor(BaseModel):
    patient_id: str
    patient_name: str
    doctor_id: str
    doctor_name: str
    type: str
    time: str 
    