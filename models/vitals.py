from typing import List
from pydantic import BaseModel

class VitalDataItem(BaseModel):
    label: str
    data: List[float]

class VitalData(BaseModel):
    patient_id: str
    labels: List[str]
    datasets: List[VitalDataItem]


class UpdateVitals(BaseModel):
    labels: str
    data: List[float]