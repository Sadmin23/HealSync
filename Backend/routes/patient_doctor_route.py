from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.patient_doctor import PatientDoctor
from schemas.schema import individual_seriallizer_patient_doctor, list_seriallizer_patient_doctor
from config.database import patient_doctor



router = APIRouter(tags=["PatientDoctor API"],prefix='/api/patientdoctor')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_patient_doctors():
    patient_doctors = list_seriallizer_patient_doctor(patient_doctor.find())
    return patient_doctors



@router.post('/',status_code=status.HTTP_201_CREATED)
async def create_patient_doctor(patient_doctor_obj: PatientDoctor):
    patient_doctor.insert_one(dict(patient_doctor_obj))
    return {'message': 'patient_doctor created' }




  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_patient_doctor(id: str, patient_doctor_data: PatientDoctor):
    obj = patient_doctor.find_one({'_id': ObjectId(id)})

    if obj is not None:
        patient_doctorObj = patient_doctor.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(patient_doctor_data)}) 
        return {'message': 'patient_doctor updated...', 'patient_doctorObj': PatientDoctor(**patient_doctorObj)}
    else:
        return JSONResponse(content={'message': f'patient_doctor with {id} not found!...'},status_code=404)

 

@router.get('/patient/{id}',status_code=status.HTTP_200_OK)
async def get_patient_doctor(id: str):
    obj = patient_doctor.find({'patient_id': id})

    if obj is not None:
        patient_doctorObj = list_seriallizer_patient_doctor(obj)
        return patient_doctorObj
    else:
        return JSONResponse(content={'message': f'patient_doctor with patient {id} not found!...'},status_code=404)
    


@router.get('/doctor/{id}',status_code=status.HTTP_200_OK)
async def get_patient_doctor(id: str):
    obj = patient_doctor.find({'doctor_id': id})

    if obj is not None:
        patient_doctorObj = list_seriallizer_patient_doctor(obj)
        return patient_doctorObj
    else:
        return JSONResponse(content={'message': f'patient_doctor with doctor {id} not found!...'},status_code=404)


 


