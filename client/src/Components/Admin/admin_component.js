import React, {useEffect, useState} from 'react';
import '../../css/admin.css';
import '../search.css';
import { Button } from 'react';

import MedRecordDetails from "../MedRecordDetails.js"

const Home = () => {
  const [medrecords, setMedRecords] = useState(null)


useEffect(() => {
    const fetchMedRecords = async () => {
        const response = await fetch('/medrecords/')
        const json = await response.json()
 
        if (response.ok) {
            setMedRecords(json)
        } 
    }

fetchMedRecords()
}, [])


return (

    <div className="table">
        <h1 font-size="larger" class="admin-component-title" align="left">Admin Dashboard</h1>
        <table className='admintable'>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Key Findings</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Weight</th>
                        <th>Zip</th>
                        <th>Update</th>
                    </tr>
                </thead>
        <tbody>
        {medrecords && medrecords.map((MedRecord) => (
            <tr>
                <td>
                    {MedRecord.Exam_id}
                </td>
                <td>
                    {MedRecord.Patient_ID}
                </td>
                <td>
                    {MedRecord.keyfindings}
                </td>
                <td>
                    {MedRecord.Age}
                </td>
                <td>
                    {MedRecord.Sex}
                </td>
                <td>
                    {MedRecord.Latest_BMI}
                </td>
                <td>
                    {MedRecord.Weight}
                </td>
                <td>
                    {MedRecord.Zip}
                </td>
                <td>
                    <a class="update-button" href={"http://localhost:3000/admin/" + MedRecord._id}>
                    UPDATE
                    </a>
                </td>

            </tr>
        ))}
        </tbody>
        </table>
    </div>
    )   
}
export default Home
