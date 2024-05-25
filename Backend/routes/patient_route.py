from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.patient import Patient, PatientLogin
from schemas.schema import individual_seriallizer_patient, list_seriallizer_patient
from config.database import patient



router = APIRouter(tags=["Patient API"],prefix='/api/patient')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_patients():
    patients = list_seriallizer_patient(patient.find())
    return patients



@router.post('/register',status_code=status.HTTP_201_CREATED)
async def create_patient(patient_obj: Patient):
    obj = patient.find_one({'username': (patient_obj.username)})
    if obj is not None :
        return JSONResponse(content={'message':'Username already exists!'},status_code=400)
    else: 
        patient.insert_one(dict(patient_obj))
        obj = individual_seriallizer_patient(patient.find_one({'username': (patient_obj.username)}))
        return {'message': 'patient Registered...', 'patient': obj}



@router.post('/login',status_code=status.HTTP_202_ACCEPTED)
async def login_patient(patientLogin: PatientLogin):
    username = patient.find_one({'username': (patientLogin.username)})
    role = patient.find_one({'role': (patientLogin.role)})
    password = patient.find_one({'password': (patientLogin.password)})

    if username is None :
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)
    if password  and role and username:
        return individual_seriallizer_patient(username)
    else:
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)


  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_patient(id: str, patient_data: Patient):
    obj = patient.find_one({'_id': ObjectId(id)})

    if obj is not None:
        patientObj = patient.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(patient_data)}) 
        return {'message': 'patient updated...', 'patientObj': Patient(**patientObj)}
    else:
        return JSONResponse(content={'message': f'patient with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_patient(id: str):
    obj = patient.find_one({'_id': ObjectId(id)})

    if obj is not None:
        patientObj = individual_seriallizer_patient(obj)
        return patientObj
    else:
        return JSONResponse(content={'message': f'patient with {id} not found!...'},status_code=404)



@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_patient(id: str):
    obj = patient.find_one({'_id': ObjectId(id)})

    if obj is not None:
        patient.find_one_and_delete({'_id': ObjectId(id)})
        return 'patient deleted...'
    else:
        return JSONResponse(content={'message': f'patient with {id} not found!...'},status_code=404)
 


