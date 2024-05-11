from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi


uri = 'mongodb://localhost:27017'

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))

# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.healsync_db
doctor = db['doctor']
nurse = db['nurse']
patient = db['patient']
emergency = db['emergency']
report = db['report']
medicine = db['medicine']
timeline = db['timeline']
vitals = db['vitals']
patient_doctor = db['patient_doctor']
patient_nurse = db['patient_nurse']






