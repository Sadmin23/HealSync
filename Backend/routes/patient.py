# routes/patient_routes.py
from fastapi import APIRouter, HTTPException, Depends
from models.patient import Patient
from config.config import patient_collection

router = APIRouter()

@router.get("/api/patient", response_model=list[Patient])
async def get_all_patients():
    patients = list(patient_collection.find({}, {'_id': 0}))  # Exclude MongoDB's _id from the results
    return [Patient(**patient) for patient in patients]

@router.get("/api/patient/{patient_id}", response_model=Patient)
async def get_patient(patient_id: str):
    patient = patient_collection.find_one({"patientId": patient_id}, {'_id': 0})
    if patient:
        return Patient(**patient)
    else:
        raise HTTPException(status_code=404, detail="Patient not found")