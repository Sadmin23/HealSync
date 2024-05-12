from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.nurse import Nurse, NurseLogin
from schemas.schema import individual_seriallizer_nurse, list_seriallizer_nurse
from config.database import nurse



router = APIRouter(tags=["Nurse API"],prefix='/api/nurse')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_nurses():
    nurses = list_seriallizer_nurse(nurse.find())
    return nurses



@router.post('/register',status_code=status.HTTP_201_CREATED)
async def create_nurse(nurse_obj: Nurse):
    obj = nurse.find_one({'username': (nurse_obj.username)})
    if obj is not None :
        return JSONResponse(content={'message':'Username already exists!'},status_code=400)
    else: 
        nurse.insert_one(dict(nurse_obj))
        obj = individual_seriallizer_nurse(nurse.find_one({'username': (nurse_obj.username)}))
        return {'message': 'nurse Registered...', 'nurse': obj}



@router.post('/login',status_code=status.HTTP_202_ACCEPTED)
async def login_nurse(nurseLogin: NurseLogin):
    username = nurse.find_one({'username': (nurseLogin.username)})
    role = nurse.find_one({'role': (nurseLogin.role)})
    password = nurse.find_one({'password': (nurseLogin.password)})

    if username is None :
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)
    if password  and role and username:
        return individual_seriallizer_nurse(username)
    else:
        return JSONResponse(content={'message':'Invalid Credentials!'},status_code=400)


  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_nurse(id: str, nurse_data: Nurse):
    obj = nurse.find_one({'_id': ObjectId(id)})

    if obj is not None:
        nurseObj = nurse.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(nurse_data)}) 
        return {'message': 'nurse updated...', 'nurseObj': Nurse(**nurseObj)}
    else:
        return JSONResponse(content={'message': f'nurse with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_nurse(id: str):
    obj = nurse.find_one({'_id': ObjectId(id)})

    if obj is not None:
        nurseObj = individual_seriallizer_nurse(obj)
        return nurseObj
    else:
        return JSONResponse(content={'message': f'nurse with {id} not found!...'},status_code=404)



@router.delete('/{id}',status_code=status.HTTP_204_NO_CONTENT)
async def delete_nurse(id: str):
    obj = nurse.find_one({'_id': ObjectId(id)})

    if obj is not None:
        nurse.find_one_and_delete({'_id': ObjectId(id)})
        return 'nurse deleted...'
    else:
        return JSONResponse(content={'message': f'nurse with {id} not found!...'},status_code=404)
 


