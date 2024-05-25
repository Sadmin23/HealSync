from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.emergency import Emergency
from schemas.schema import individual_seriallizer_emergency, list_seriallizer_emergency
from config.database import emergency



router = APIRouter(tags=["Emergency API"],prefix='/api/emergency')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_emergencys():
    emergencys = list_seriallizer_emergency(emergency.find())
    return emergencys



@router.post('/',status_code=status.HTTP_201_CREATED)
async def create_emergency(emergency_obj: Emergency):
    emergency.insert_one(dict(emergency_obj))
    return {'message': 'Emergency created' }




  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_emergency(id: str, emergency_data: Emergency):
    obj = emergency.find_one({'_id': ObjectId(id)})

    if obj is not None:
        emergencyObj = emergency.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(emergency_data)}) 
        return {'message': 'emergency updated...', 'emergencyObj': Emergency(**emergencyObj)}
    else:
        return JSONResponse(content={'message': f'emergency with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_emergency(id: str):
    obj = emergency.find({'doctor_id': id})

    if obj is not None:
        emergencyObj = list_seriallizer_emergency(obj)
        return emergencyObj
    else:
        return JSONResponse(content={'message': f'emergency with {id} not found!...'},status_code=404)


 


