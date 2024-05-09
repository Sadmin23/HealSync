from fastapi import APIRouter, HTTPException, Depends
from models.nurse import Nurse
from config.config import nurse_collection


router = APIRouter()


@router.get("/api/nurse", response_model=list[Nurse])
async def get_all_nurse():
    nurses = list(
        nurse_collection.find({}, {"_id": 0})
    )  # Exclude MongoDB's _id from the results
    return [Nurse(**nurse) for nurse in nurses]


@router.get("/api/nurse/{nurse_id}", response_model=Nurse)
async def get_nurse(nurse_id: str):
    nurse = nurse_collection.find_one({"nurseId": nurse_id}, {"_id": 0})
    if nurse:
        return Nurse(**nurse)
    else:
        raise HTTPException(status_code=404, detail="Nurse not found")
