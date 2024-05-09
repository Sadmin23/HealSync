from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://sadmin:01704601664@cluster0.cjitxwo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi("1"))

db = client["HealSync"]
patient_collection = db.patients
doctor_collection = db.doctors
nurse_collection = db.nurses

dummy_data = [
    {
        "nurseId": "N1SMKD45",
        "name": "John Doe",
        "gender": "Male",
        "phone": "1234567890",
        "email": "john.doe@example.com",
    },
    {
        "nurseId": "N2SMKD46",
        "name": "Alice Smith",
        "gender": "Female",
        "phone": "9876543210",
        "email": "alice.smith@example.com",
    }
]

# Insert dummy data into MongoDB
for data in dummy_data:
    nurse_collection.insert_one(data)

try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)
