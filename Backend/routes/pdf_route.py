from fastapi import APIRouter, FastAPI, File, UploadFile, Form, HTTPException
from fastapi.responses import FileResponse
import os
import shutil


router = APIRouter(tags=["Pdf API"],prefix='')



@router.post("/upload/{username}")
async def upload_pdf(username: str, file: UploadFile = File(...)):
    user_folder = f"uploads/{username}"
    file_path = os.path.join(user_folder, file.filename)
    
    with open(file_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    return {"filename": file.filename}
  

@router.get("/pdf/{username}/{filename}")
async def get_pdf(username: str, filename: str):
    file_path = os.path.join("uploads", username, filename)
    if not os.path.exists(file_path):
        os.makedirs(f"uploads/{username}", exist_ok=True)
    return FileResponse(path=file_path, media_type="routerlication/pdf", filename=filename)


@router.get("/pdf/{username}")
async def list_pdf_files(username: str):
    user_folder = f"uploads/{username}"
    if not os.path.exists(user_folder):
        os.makedirs(f"uploads/{username}", exist_ok=True)

    pdf_files = []
    for file_name in os.listdir(user_folder):
        if file_name.endswith(".pdf"):
            pdf_files.append({"filename": file_name})
    return pdf_files
