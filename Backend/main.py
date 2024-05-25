from fastapi import FastAPI
from routes import doctor_route,nurse_route,medicine_route,patient_route,emergency_route,timeline_route,vitals_route,patient_doctor_route,patient_nurse_route,pdf_route
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI(
    title="HealSync WebApplicatoin API Backend",
)


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


app.include_router(doctor_route.router)
app.include_router(nurse_route.router)
app.include_router(patient_route.router)
app.include_router(emergency_route.router)
app.include_router(timeline_route.router)
app.include_router(vitals_route.router)
app.include_router(patient_nurse_route.router)
app.include_router(patient_doctor_route.router)
app.include_router(medicine_route.router)
app.include_router(pdf_route.router)

