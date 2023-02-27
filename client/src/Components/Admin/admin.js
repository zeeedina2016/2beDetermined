import React, {useContext, useEffect, useState, Fragment} from 'react';
import '../../App.css';
import data from '../../mock-data.json';


function Admin() {
    
    const [patients, setPatients] = useState(data);

    return (
        <div className="app-container">
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Key Findings</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient)=> (                    
                        <tr>
                            <td>{patient.patientid}.</td>
                            <td>{patient.examid}</td>
                            <td>{patient.keyfindings}</td>
                            <td>{patient.age}</td>
                            <td>{patient.sex}</td>
                            <td>{patient.bmi}</td>
                            <td>{patient.zipcode}</td>
                        </tr>
                     ))}
                </tbody>
            </table>
        </div>
    );
};

export default Admin;