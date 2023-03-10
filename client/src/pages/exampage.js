import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../App.css';
import '../css/exampage.css';
import logo from "../medlogo.png";

function Exam(props) {
    const [patient, setPatient] = useState({
        Patient_ID: "",
        Age: "",
        Sex: "",
        Latest_BMI: "",
        Zipcode: "",
        Exam_id: "",
        Png_Filename: "",
        Date: "",
        Key_Findings: "",
        Brixa_Score: "",
    });

    const {id} = useParams()

    useEffect(() => {
        const fetchMedRecords = async () => {
          const url = 'https://atmedrecordsbackend.onrender.com/medrecords/' + id
          const response = await fetch(url)
          const json = await response.json()
    
          console.log(json)
    
          if (response.ok) {
            setPatient({
              Patient_ID: (json.Patient_ID == undefined) ? "" : json.Patient_ID,
              Age: (json.Age == undefined) ? "" : json.Age, 
              Sex: (json.Sex == undefined) ? "" : json.Sex,
              Latest_BMI: (json.Latest_BMI == undefined) ? "" : json.Latest_BMI, 
              Zip: (json.Zip == undefined) ? "" : json.Zip, 
              Exam_id: (json.Exam_id == undefined) ? "" : json.Exam_id, 
              Png_Filename: (json.Png_Filename == undefined) ? "" : json.Png_Filename, 
              Date: (json.Date == undefined) ? "" : json.Date, 
              Key_Findings: (json.Key_Findings == undefined) ? "" : json.Key_Findings, 
              Brixa_Score: (json.Brixa_Score == undefined) ? "" : json.Brixa_Score, 
            })

          } else {
              console.log("Error")
          }
        }
    
        fetchMedRecords(id)
      }, [id])

    return (
        <div className="form">
            <div className="wrapper">
                <img src={logo} alt="medlogo" />
                <h2>EXAM PAGE</h2>
            </div>

            <div class="infoContainer">
                <div>
                    <h2>Patient Info</h2>

                    <label>Patient ID:</label>
                    <div className="textFields">{patient.Patient_ID}</div>

                    <label>Age:</label>
                    <div className="textFields">{patient.Age}</div>

                    <label>Sex:</label>
                    <div className="textFields">{patient.Sex}</div>

                    <label>BMI:</label>
                    <div className="textFields">{patient.Latest_BMI}</div>

                    <label>ZipCode:</label>
                    <div className="textFields">{patient.Zip}</div>
                </div>

                <div>
                    <h2>Exam Info</h2>

                    <label>Exam ID:</label>
                    <div className="textFields">{patient.Exam_id}</div>

                    {/* <label>Image URL:</label>
                    <div className="textFields">{patient.Png_Filename}</div> */}

                    <img 
                        className="wrapper"
                        src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.Png_Filename}
                        alt={""}
                    />

                    <label>Key Findings:</label>
                    <div className="textFields">{patient.Key_Findings}</div>

                    {/* <label>Brixia Score (separated by commas):</label>
                    <div className="textFields">{patient.Brixa_Score}</div> */}
                </div>
            </div>

        </div>


    );

//         <div className="examDiv">
//             <div>
//                 <h1 className="col1_H">Patient Information</h1>
//                 <div>
//                     <h4 className="patientID_H">Patient ID</h4>
//                     <div className="patientID">{patient.Patient_ID}</div>

//                     <h4 className="age_H">Age</h4>
//                     <div className="age">{patient.Age} </div>

//                     <h4 className="sex_H">Sex</h4>
//                     <div className="sex">{patient.Sex}</div>

//                     <h4 className="bmi_H">BMI</h4>
//                     <div className="bmi">{patient.Latest_BMI}</div>

//                     <h4 className="zipCode_H">ZipCode</h4>
//                     <div className="zipCode">{patient.Zip}</div>
//                 </div>
//             </div>

//             <div>
//                 <h1 className="col2_H">Exam Information</h1>
//                 <div>
//                     <img 
//                         className="img"
//                         src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.Png_Filename}
//                         alt={""}
//                     />

//                     <h4 className="examID_H">Exam ID</h4>
//                     <div className="examID">{patient.Exam_id}</div>
// {/* 
//                     <h4 className="date_H">Date</h4>
//                     <div className="date">{patient.Date}</div> */}

//                     <h4 className="url_H">Image URL</h4>
//                     <div className="url">{patient.Png_Filename}</div>

//                     <h4 className="keyFindings_H">Exam Details</h4>
//                     <input 
//                         className="keyFindings"
//                         type="text"
//                         value={patient.Key_Findings}
//                         onChange={e => setPatient({...patient, Key_Findings: e.target.value})}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
}

export default Exam;