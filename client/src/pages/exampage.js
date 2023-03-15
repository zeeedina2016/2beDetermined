import React, { useState, useEffect } from 'react';
import '../App.css';
import { useParams } from 'react-router-dom';
// import '../App.css';
import '../css/exampage.css';

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
          }
        }
    
        fetchMedRecords(id)
      }, [id])

    return (
        <div className="examDetail">
            <div className="wrapper">
                <img src={logo} alt="medlogo" />
                <h2>EXAM PAGE</h2>
            </div>

            <div className="infoContainer">
                <div>
                    <h2>Patient Info</h2>

                    <label>Patient ID:</label> 
                    <div className="info">{patient.Patient_ID}</div>

                    <label>Age:</label>
                    <div className="info">{patient.Age}</div>

                    <label>Sex:</label>
                    <div className="info">{patient.Sex}</div>

                    <label>BMI:</label>
                    <div className="info">{patient.Latest_BMI}</div>

                    <label>ZipCode:</label>
                    <div className="info">{patient.Zip}</div>
                </div>

                <div>
                    <h2 className= "name">Exam Info</h2>

                    <div>
                        <img 
                            className="medpic"
                            src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.Png_Filename}
                            alt={""}
                        />
                    </div>

                    <label>Exam ID:</label>
                    <div className="info">{patient.Exam_id}</div>

                    {/* <label>Image:</label>
                    <div className="info">{patient.Png_Filename}</div> */}

                    {/* <div>
                        <img 
                            className="medpic"
                            src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.Png_Filename}
                            alt={""}
                        />
                    </div> */}

                    <label>Key Findings:</label>
                    <div className="info">{patient.Key_Findings}</div>

                    <h4 className="url_H">Image URL</h4>
                    <div className="url">{patient.Png_Filename}</div>

                    <h4 className="keyFindings_H">Exam Details</h4>
                    <input 
                        className="keyFindings"
                        type="text"
                        value={patient.Key_Findings}
                        onChange={e => setPatient({...patient, Key_Findings: e.target.value})}
                    />
                </div>
            </div>
        </div>
    );
}

export default Exam;
