from fastapi import APIRouter, HTTPException, Depends
from models.doctor import Doctor
from config.config import doctor_collection

router = APIRouter()


@router.get("/api/doctor", response_model=list[Doctor])
async def get_all_doctor():
    doctors = list(
        doctor_collection.find({}, {"_id": 0})
    )  # Exclude MongoDB's _id from the results
    return [Doctor(**doctor) for doctor in doctors]


@router.get("/api/doctor/{doctor_id}", response_model=Doctor)
async def get_doctor(doctor_id: str):
    doctor = doctor_collection.find_one({"doctorId": doctor_id}, {"_id": 0})
    if doctor:
        return Doctor(**doctor)
    else:
        raise HTTPException(status_code=404, detail="Doctor not found")
