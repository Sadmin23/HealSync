from pydantic import BaseModel

class PatientNurse(BaseModel):
    patient_id: str
    patient_name: str
    nurse_id: str
    nurse_name: str
    type: str
    time: str 
    