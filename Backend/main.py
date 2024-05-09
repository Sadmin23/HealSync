# main.py
from fastapi import FastAPI
from routes.patient import router as patient
from routes.doctor import router as doctor

app = FastAPI()

app.include_router(patient)
app.include_router(doctor)

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)