def individual_seriallizer_doctor(doctor) -> dict:
    return {
        'id': str(doctor['_id']),
        'username': doctor['username'],
        'name': doctor['name'],
        'gender': doctor['gender'],
        'specialization': doctor['specialization'],
        'email': doctor['email'],
        'password': doctor['password'],
        'phone': doctor['phone'],
        'role': doctor['role']
    }
 

def list_seriallizer_doctor(doctors) ->  list:
    return [individual_seriallizer_doctor(doctor) for doctor in doctors]


def individual_seriallizer_nurse(nurse) -> dict:
    return {
        'id': str(nurse['_id']),
        'username': nurse['username'],
        'name': nurse['name'],
        'gender': nurse['gender'],
        'email': nurse['email'],
        'password': nurse['password'],
        'phone': nurse['phone'],
        'role': nurse['role']
    }
 

def list_seriallizer_nurse(nurses) ->  list:
    return [individual_seriallizer_nurse(nurse) for nurse in nurses]




def individual_seriallizer_patient(patient) -> dict:
    return {
        'id': str(patient['_id']),
        'username': patient['username'],
        'name': patient['name'],
        'gender': patient['gender'],
        'email': patient['email'],
        'password': patient['password'],
        'phone': patient['phone'],
        'role': patient['role'],
        'age': patient['age'],
        'blood_group': patient['blood_group'],
        'weight': patient['weight'],
        'attendant_name': patient['attendant_name'],
        'attendant_email': patient['attendant_email'],
        'attendant_phone': patient['attendant_phone']
    }
 

def list_seriallizer_patient(patients) ->  list:
    return [individual_seriallizer_patient(patient) for patient in patients]



def individual_seriallizer_emergency(emergency) -> dict:
    return {
        'id': str(emergency['_id']),
        'name': emergency['name'],
        'doctor_id': emergency['doctor_id'],
        'patient_id': emergency['patient_id'],
        'action': emergency['action'],
        'time': emergency['time'],
    }
 

def list_seriallizer_emergency(emergencys) ->  list:
    return [individual_seriallizer_emergency(emergency) for emergency in emergencys]



def individual_seriallizer_timeline(timeline) -> dict:
    return {
        'id': str(timeline['_id']),
        'title': timeline['title'],
        'description': timeline['description'],
        'patient_id': timeline['patient_id'],
        'time': timeline['time'],
    }
 

def list_seriallizer_timeline(timelines) ->  list:
    return [individual_seriallizer_timeline(timeline) for timeline in timelines]



def individual_seriallizer_vitals(vitals) -> dict:
    return {
        'id': str(vitals['_id']),
        'body_temp': vitals['body_temp'],
        'oxygen_sat': vitals['oxygen_sat'],
        'patient_id': vitals['patient_id'],
        'heart_rate': vitals['heart_rate'],
        'sys_pressure': vitals['oxygen_sat'],
        'dias_pressure': vitals['patient_id'],
        
    }
 

def list_seriallizer_vitals(vitalss) ->  list:
    return [individual_seriallizer_vitals(vitals) for vitals in vitalss]



def individual_seriallizer_medicine(medicine) -> dict:
    return {
        'id': str(medicine['_id']),
        'name': medicine['name'],
        'type': medicine['type'],
        'patient_id': medicine['patient_id'],
        'dose': medicine['dose']
        
    }
 

def list_seriallizer_medicine(medicines) ->  list:
    return [individual_seriallizer_medicine(medicine) for medicine in medicines]




def individual_seriallizer_patient_doctor(patient_doctor) -> dict:
    return {
        'id': str(patient_doctor['_id']),
        'patient_id': patient_doctor['patient_id'],
        'patient_name': patient_doctor['patient_name'],
        'doctor_id': patient_doctor['doctor_id'],
        'doctor_name': patient_doctor['doctor_name'],
        'type': patient_doctor['type'],
        'time': patient_doctor['time']
        
    }
 

def list_seriallizer_patient_doctor(patient_doctors) ->  list:
    return [individual_seriallizer_patient_doctor(patient_doctor) for patient_doctor in patient_doctors]


def individual_seriallizer_patient_nurse(patient_nurse) -> dict:
    return {
        'id': str(patient_nurse['_id']),
        'patient_id': patient_nurse['patient_id'],
        'patient_name': patient_nurse['patient_name'],
        'nurse_id': patient_nurse['nurse_id'],
        'nurse_name': patient_nurse['nurse_name'],
        'type': patient_nurse['type'],
        'time': patient_nurse['time']
        
    }
 

def list_seriallizer_patient_nurse(patient_nurses) ->  list:
    return [individual_seriallizer_patient_nurse(patient_nurse) for patient_nurse in patient_nurses]