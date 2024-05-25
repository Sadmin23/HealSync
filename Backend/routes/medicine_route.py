from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.medicine import Medicine
from schemas.schema import individual_seriallizer_medicine, list_seriallizer_medicine
from config.database import medicine



router = APIRouter(tags=["Medicine API"],prefix='/api/medicine')

@router.get('/',status_code=status.HTTP_200_OK)
async def get_medicines():
    medicines = list_seriallizer_medicine(medicine.find())
    return medicines



@router.post('/',status_code=status.HTTP_201_CREATED)
async def create_medicine(medicine_obj: Medicine):
    medicine.insert_one(dict(medicine_obj))
    return {'message': 'Medicine created' }




  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_medicine(id: str, medicine_data: Medicine):
    obj = medicine.find_one({'_id': ObjectId(id)})

    if obj is not None:
        medicineObj = medicine.find_one_and_update({'_id': ObjectId(id)},{'$set':dict(medicine_data)}) 
        return {'message': 'medicine updated...', 'medicineObj': Medicine(**medicineObj)}
    else:
        return JSONResponse(content={'message': f'medicine with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_medicine(id: str):
    obj = medicine.find({'patient_id': id})

    if obj is not None:
        medicineObj = list_seriallizer_medicine(obj)
        return medicineObj
    else:
        return JSONResponse(content={'message': f'medicine with patient {id} not found!...'},status_code=404)


 


