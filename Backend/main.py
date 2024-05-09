# main.py
from fastapi import FastAPI
from routes.patient import router as patient
from routes.doctor import router as doctor
from routes.nurse import router as nurse
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],  # Add "PUT" method
    allow_headers=["*"],
)

app.include_router(patient)
app.include_router(doctor)
app.include_router(nurse)

if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)
