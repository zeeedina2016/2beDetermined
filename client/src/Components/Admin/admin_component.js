import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import '../../css/admin.css';
import '../search.css';
var image = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/"

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
        <table className='admintable'>
                <thead>
                    <tr>
                        <th>Patient ID</th>
                        <th>Exam ID</th>
                        <th>Image</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>BMI</th>
                        <th>Zip</th>
                        <th>Update</th>
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
                    {MedRecord.Zip}
                </td>
                <td>
                    <Link to={`/admin/${MedRecord._id}`}>
                     <button class="update-button">UPDATE</button>
                    </Link>
                </td>

            </tr>
        ))}
        </tbody>
        </table>
    </div>
    )   
}
export default Home
