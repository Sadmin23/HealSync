from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.vitals import UpdateVitals, VitalData
from schemas.schema import individual_seriallizer_vitals, list_seriallizer_vitals
from config.database import vitals



router = APIRouter(tags=["Vitals API"],prefix='/api/vitals')


@router.get('/',status_code=status.HTTP_200_OK)
async def get_vitals():
    vitals_data = vitals.find({})
    vitals_data_list = [VitalData(**vital_data) for vital_data in vitals_data]
    return vitals_data_list


@router.post("/")
async def create_vitals(vital_data: VitalData):
    document = vital_data.dict() 
    result = vitals.insert_one(document)
    return {"message": "Vital data created successfully", "inserted_id": str(result.inserted_id)}
 

  
@router.put('/{id}',status_code=status.HTTP_200_OK)
async def update_vitals(id: str, vital_data: UpdateVitals):
    obj = vitals.find_one({'patient_id': id})
        
    
    if obj is not None:
        document = VitalData(**obj)
        document.labels.append(vital_data.labels)
        for i in range(5):
            document.datasets[i].data.append(vital_data.data[i])
        
        vitalsObj = vitals.find_one_and_update({'patient_id': id},{'$set':document.dict()})
        vitalsObj = vitals.find_one({'patient_id': id}) 
        return {'message': 'vitals updated...', 'vitalsObj': VitalData(**vitalsObj)} 
    else:
        return JSONResponse(content={'message': f'vitals with {id} not found!...'},status_code=404)



@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_vitals(id: str):
    obj = vitals.find_one({'patient_id': id})

    if obj is not None:
        vitalsObj = VitalData(**obj)
        return vitalsObj
    else:
        return JSONResponse(content={'message': f'vitals with patient {id} not found!...'},status_code=404)


 

# @router.get("/ok/{patient_id}")
# async def get_vitals(patient_id: str):
#     # Retrieve data from MongoDB
#     document = vitals.find_one({"patient_id": patient_id})
    
#     # Convert MongoDB document to Pydantic model
#     vital_data = VitalData(**document)
    
#     return vital_data

