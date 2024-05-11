from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.doctor import Doctor, DoctorLogin
from schemas.schema import individual_seriallizer_doctor, list_seriallizer_doctor
from config.database import doctor



router = APIRouter(tags=["Doctor API"],prefix='/api/doctor')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_doctors():
    doctors = list_seriallizer_doctor(doctor.find())
    return doctors



@router.post('/register',status_code=status.HTTP_201_CREATED)
async def create_doctor(doctor_obj: Doctor):
    obj = doctor.find_one({'username': (doctor_obj.username)})
    if obj is not None :
        return JSONResponse(content={'message':'Username already exists!'},status_code=400)
    else: 
        doctor.insert_one(dict(doctor_obj))
        obj = individual_seriallizer_doctor(doctor.find_one({'username': (doctor_obj.username)}))
        return {'message': 'Doctor Registered...', 'Doctor': obj}


@router.post('/login',status_code=status.HTTP_202_ACCEPTED)
async def login_doctor(doctorLogin: DoctorLogin):
    username = doctor.find_one({'username': (doctorLogin.username)})
    role = doctor.find_one({'role': (doctorLogin.role)})
    password = doctor.find_one({'password': (doctorLogin.password)})

    if username is None :
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)
    if password  and role and username:
        return individual_seriallizer_doctor(username)
    else:
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)


  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_doctor(id: str, doctor: Doctor):
    obj = doctor.find_one({'_id': ObjectId(id)})

    if obj is not None:
        doctorObj = doctor.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(doctor)}) 
        return {'message': 'Doctor updated...', doctorObj: doctorObj}
    else:
        return JSONResponse(content={'message': f'Doctor with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_doctor(id: str):
    obj = doctor.find_one({'_id': ObjectId(id)})

    if obj is not None:
        doctorObj = individual_seriallizer_doctor(obj)
        return doctorObj
    else:
        return JSONResponse(content={'message': f'Doctor with {id} not found!...'},status_code=404)



@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_doctor(id: str):
    obj = doctor.find_one({'_id': ObjectId(id)})

    if obj is not None:
        doctor.find_one_and_delete({'_id': ObjectId(id)})
        return 'Doctor deleted...'
    else:
        return JSONResponse(content={'message': f'Doctor with {id} not found!...'},status_code=404)
 


