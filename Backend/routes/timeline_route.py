from fastapi import APIRouter,status
from fastapi.responses import JSONResponse
from bson import ObjectId
from models.timeline import Timeline
from schemas.schema import individual_seriallizer_timeline, list_seriallizer_timeline
from config.database import timeline



router = APIRouter(tags=["Timeline API"],prefix='/api/timeline')



@router.post('/',status_code=status.HTTP_201_CREATED)
async def create_timeline(timeline_obj: Timeline):
    timeline.insert_one(dict(timeline_obj))
    return {'message': 'Timeline created' }




@router.get('/{id}',status_code=status.HTTP_200_OK)
async def get_timeline(id: str): 
    obj = timeline.find({'patient_id': id})

    if obj is not None:
        timelineObj = list_seriallizer_timeline(obj)
        return timelineObj
    else:
        return JSONResponse(content={'message': f'timeline with {id} not found!...'},status_code=404)


 


