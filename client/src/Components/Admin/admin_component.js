import React, {useEffect, useState} from 'react';
import '../../css/admin.css';
import '../search.css';


const Home = () => {
  const [medrecords, setMedRecords] = useState(null)


useEffect(() => {
    const fetchMedRecords = async () => {
        const response = await fetch('https://atmedrecordsbackend.onrender.com/medrecords')
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
                        <th>Edit Delete</th>
                    </tr>
                </thead>
        <tbody>
        {medrecords && medrecords.map((MedRecord) => (
            <tr>
                <td>
                    {MedRecord.Patient_ID}
                </td>
                <td>
                    {MedRecord.Exam_id}
                </td>
                <td>
                <img src={image+MedRecord.Png_Filename}alt="new"/>
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
                    {MedRecord.Latest_Weight}
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
