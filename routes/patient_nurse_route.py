from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.patient_nurse import PatientNurse
from schemas.schema import individual_seriallizer_patient_nurse, list_seriallizer_patient_nurse
from config.database import patient_nurse



router = APIRouter(tags=["PatientNurse API"],prefix='/api/patientnurse')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_patient_nurses():
    patient_nurses = list_seriallizer_patient_nurse(patient_nurse.find())
    return patient_nurses



@router.post('/',status_code=status.HTTP_201_CREATED)
async def create_patient_nurse(patient_nurse_obj: PatientNurse):
    patient_nurse.insert_one(dict(patient_nurse_obj))
    return {'message': 'patient_nurse created' }




  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_patient_nurse(id: str, patient_nurse_data: PatientNurse):
    obj = patient_nurse.find_one({'_id': ObjectId(id)})

    if obj is not None:
        patient_nurseObj = patient_nurse.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(patient_nurse_data)}) 
        return {'message': 'patient_nurse updated...', 'patient_nurseObj': PatientNurse(**patient_nurseObj)}
    else:
        return JSONResponse(content={'message': f'patient_nurse with {id} not found!...'},status_code=404)



@router.get('/patient/{id}',status_code=status.HTTP_200_OK)
async def get_patient_nurse(id: str):
    obj = patient_nurse.find({'patient_id': id})

    if obj is not None:
        patient_nurseObj = list_seriallizer_patient_nurse(obj)
        return patient_nurseObj
    else:
        return JSONResponse(content={'message': f'patient_nurse with patient {id} not found!...'},status_code=404)
    


@router.get('/nurse/{id}',status_code=status.HTTP_200_OK)
async def get_patient_nurse(id: str):
    obj = patient_nurse.find({'nurse_id': id})

    if obj is not None:
        patient_nurseObj = list_seriallizer_patient_nurse(obj)
        return patient_nurseObj
    else:
        return JSONResponse(content={'message': f'patient_nurse with nurse {id} not found!...'},status_code=404)


 


