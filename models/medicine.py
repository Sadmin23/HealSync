from pydantic import BaseModel

class Medicine(BaseModel):
    name: str
    patient_id: str
    type: str
    dose: str 
    





    