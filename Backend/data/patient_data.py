# populate_data.py

from config.config import doctor_collection

dummy_data = [
    {
        "doctorId": "D1SMKD45",
        "name": "John Doe",
        "gender": "Male",
        "specialization": "Cardiologist",
        "phone": "1234567890",
        "email": "john.doe@example.com",
    },
    {
        "doctorId": "D2SMKD46",
        "name": "Alice Smith",
        "gender": "Female",
        "specialization": "Dermatologist",
        "phone": "9876543210",
        "email": "alice.smith@example.com",
    }
]

# Insert dummy data into MongoDB
for data in dummy_data:
    doctor_collection.insert_one(data)