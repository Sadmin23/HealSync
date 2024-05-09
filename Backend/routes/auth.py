from fastapi import APIRouter, HTTPException
from config.config import patient_collection
from config.config import doctor_collection
from config.config import nurse_collection

router = APIRouter()

def authenticate_user(user_type: str, user_id: str, password: str) -> dict:
    user = None
    if user_type == "patient":
        user = patient_collection.find_one({"patientId": user_id, "password": password})
    elif user_type == "doctor":
        user = doctor_collection.find_one({"doctorId": user_id, "password": password})
    elif user_type == "nurse":
        user = nurse_collection.find_one({"nurseId": user_id, "password": password})
    return user

@router.post("/login")
async def login(user_type: str, user_id: str, password: str) -> dict:
    user = authenticate_user(user_type, user_id, password)
    if not user:
        raise HTTPException(status_code=401, detail="Incorrect username or password")

    return {"userid": user_id}