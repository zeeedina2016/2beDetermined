import React, {useState, Fragment} from 'react';
import { nanoid } from 'nanoid'
import data from "../mock-data.json";
import ReadOnlyRow from '../Components/read-only-row';
import EditableRow from '../Components/editable-row';
import '../css/admin.css';



function Admin() {

    const [patients, setPatients] = useState(data);
    const [addFormData, setAddFormData] = useState({
        patientid: '',
        examid: '',
        keyfindingsid: '',
        brixiascores: '',
        age: '',
        sex: '',
        bmi: '',
        zipcode: '',

    });

    const [editFormData, setEditFormData] = useState({
        patientid: '',
        examid: '',
        keyfindingsid: '',
        brixiascores: '',
        age: '',
        sex: '',
        bmi: '',
        zipcode: '',
    });

    const [editPatientId, setEditPatientId] = useState(null);

    const handleAddFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute('name');    
        const fieldValue = event.target.value;
       
        const newFormData = { ...addFormData};
        newFormData[fieldName] = fieldValue;
        
        setAddFormData(newFormData);
    };


    const handleEditFormChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const newFormData = { ...editFormData };
        newFormData[fieldName] = fieldValue;

        setEditFormData(newFormData);
    }


    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newpatient = {

            id: nanoid(),
            patientid: addFormData.patientid,
            examid: addFormData.examid,
            keyfindingsid: addFormData.keyfindingsid,
            brixiascores: addFormData.brixiascores,
            age: addFormData.age,
            sex: addFormData.sex,
            bmi: addFormData.bmi,
            zipcode: addFormData.zipcode,
        };

        const newpatients = [...patients, newpatient];
        setPatients(newpatients);
    };

    const handleEditFormSubmit = (event) => {
        event.preventDefault();

        const editedPatient = {
            id: editPatientId,
            patientid: editFormData.patientid,
            examid: editFormData.examid,
            keyfindingsid: editFormData.keyfindingsid,
            brixiascores: editFormData.brixiascores,
            age: editFormData.age,
            sex: editFormData.sex,
            bmi: editFormData.bmi,
            zipcode: editFormData.zipcode,
        }
        
    const newpatients = [...patients];

    const index = patients.findIndex((patient) => patient.id === editPatientId);
    
    newpatients[index] = editedPatient;

    setPatients(newpatients);

    setEditPatientId(null);

    };

    const handleEditClick = (event, patient) => {
        event.preventDefault();
        setEditPatientId(patient.id);

        const formValues = {
            patientid: patient.patientid,
            examid: patient.examid,
            keyfindingsid: patient.keyfindingsid,
            brixiascores: patient.brixiascores,
            age: patient.age,
            sex: patient.sex,
            bmi: patient.bmi,
            zipcode: patient.zipcode,

        }

        setEditFormData(formValues);
    };

    const handleCancelClick = () => {
        setEditPatientId(null);
    };
  

    const handleDeleteClick = (patientid) => {
        const newpatients = [...patients];

        const index = patients.findIndex((patient)=> patient.id  === patientid);

        newpatients.splice(index, 1);

        setPatients(newpatients);
    }

    return (
        <div className="app-container">
            <form onSubmit={handleEditFormSubmit}>
                <table>
                    <thead>
                        <tr>
                            <th>Patient ID</th>
                            <th>Exam ID</th>
                            <th>Key Findings ID</th>
                            <th>Brixia Scores</th>
                            <th>Age</th>
                            <th>Sex</th>
                            <th>BMI</th>
                            <th>Zip Code</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {patients.map((patient) => (
                            <Fragment>
                                {editPatientId === patient.id ? (
                                    <EditableRow 
                                        editFormData={editFormData} 
                                        handleEditFormChange={handleEditFormChange}
                                        handleCancelClick={handleCancelClick}
                                        /> 
                                ) : (
                                    <ReadOnlyRow 
                                    patient={patient} 
                                    handleEditClick={handleEditClick}
                                    handleDeleteClick={handleDeleteClick}
                                    />
                                )}
                            </Fragment>
                        ))}
                    </tbody>
                </table>
            </form>

            <h2>Add a Patient</h2>
                <form onSubmit={handleAddFormSubmit}>
                    <input 
                        type="text" 
                        name="patientid" 
                        required="required" 
                        placeholder="Patient id" 
                        value={editFormData.patientid}
                        onChange={handleAddFormChange}
                    />

                    <input 
                        type="text" 
                        name="examid" 
                        required="required" 
                        placeholder="Exam id" 
                        value={editFormData.examid}
                        onChange={handleAddFormChange}
                    />
                    
                    <input 
                        type="text" 
                        name="keyfindingsid" 
                        required="required" 
                        placeholder="Key findings" 
                        value={editFormData.keyfindingsid}
                        onChange={handleAddFormChange}
                    />
                    
                    <input 
                        type="text" 
                        name="brixiascores" 
                        required="required" 
                        placeholder="Brixia scores" 
                        value={editFormData.brixiascores}
                        onChange={handleAddFormChange}
                    />
                    
                    <input 
                        type="text" 
                        name="age" 
                        required="required" 
                        placeholder="Age" 
                        value={editFormData.brixiascores}
                        onChange={handleAddFormChange}
                    />

                    <input 
                        type="text" 
                        name="sex" 
                        required="required" 
                        placeholder="Sex" 
                        value={editFormData.sex}
                        onChange={handleAddFormChange}
                    />
                    
                    <input 
                        type="text" 
                        name="bmi" 
                        required="required" 
                        placeholder="BMI" 
                        value={editFormData.bmi}
                        onChange={handleAddFormChange}
                    />
                    
                    <input 
                        type="text" 
                        name="zipcode" 
                        required="required" 
                        placeholder="Zip code" 
                        value={editFormData.zipcode}
                        onChange={handleAddFormChange}
                    />
            </form>
        </div>
    );
  };

  export default Admin;