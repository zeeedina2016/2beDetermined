import React, { useState, useEffect } from 'react';
// import Axios from "axios";
import '../App.css';
// import data from '../fakeData.json';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-boostrap/Col';

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

    // const [updatePatient, setUpdatePatient] = useState(false);
    // const [updateExam, setUpdateExam] = useState(false);

    /* I tried to fetch data from a fake json file, but doesn't seem to work :( */
    // useEffect(() => {
    //     setPatient(data)
    //     console.log(data)
    // }, []);



    // const [patient, setPatient] = useState({
    //     id: "COVID-19-AR-16406513",
    //     age: 44,
    //     sex: "M",
    //     bmi: 32.3,
    //     zipCode: 722,
    //     examID: "Exam-3",
    //     imageURL: "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png",
    //     date: "2023-01-01",
    //     keyFindings: "",
    // });

    // if (!patient) {
    //     return <h1>Loading...</h1>
    // }

    // const [getPatient, setGetPatient] = useState({
    //     id = {data.patientid},
    //     age = {data.age},
    //     sex = {data.sex},
    //     bmi = {data.bmi},
    //     zipCode = {data.zipcode},
    //     examID = {data.examid},
    //     imageURL = "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png",
    //     date = "2023-01-01",
    //     keyFindings = "",
    // });



    // const [patient, setPatient] = useState({
    //         id: {data.patientid},
    //         age: {data.age},
    //         sex: {data.sex},
    //         bmi: {data.bmi},
    //         zipCode: {data.zipcode},
    //         examID: {data.examid},
    //         imageURL: "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png",
    //         date: "2023-01-01",
    //         keyFindings: "",
    // });

    // const updatePatientInfo = () => {
    //     setUpdatePatient(!updatePatient)
    // };

    // const updateExamInfo = () => {
    //     setUpdateExam(!updateExam)
    // };

    // const getData = () => {
    //     fetch("http://localhost:4000/medrecords/")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data);
    //     });
    // };

    const id = props.id

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

    // const getData = () => {
    //     Axios.get("http://localhost:4000/medrecords/").then((res) => {
    //         console.log(data);
    //     })
    // }

    return (

        <div>
            <div>
                <h1 className="col1_H">Patient Information</h1>
                <div>
                    <h4 className="patientID_H">Patient ID</h4>
                    <div className="patientID">{patient.Patient_ID}</div>

                    <h4 className="age_H">Age</h4>
                    <div className="age">{patient.Age} </div>

                    <h4 className="sex_H">Sex</h4>
                    <div className="sex">{patient.Sex}</div>

                    <h4 className="bmi_H">BMI</h4>
                    <div className="bmi">{patient.Latest_BMI}</div>

                    <h4 className="zipCode_H">ZipCode</h4>
                    <div className="zipCode">{patient.Zipcode}</div>
                </div>

                {/* If pressed, go to Edit page ? */}
                {/* <button className="buttonPatient" onClick={updatePatientInfo}>UPDATE</button> */}
            </div>

            <div>
                <h1 className="col2_H">Exam Information</h1>
                <div>
                    <img 
                        className="img"
                        src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + patient.Png_Filename}
                        alt={""}
                    />

                    <h4 className="examID_H">Exam ID</h4>
                    <div className="examID">{patient.Exam_id}</div>

                    {/* Will likely useState here once styling */}
                    <h4 className="date_H">Date</h4>
                    {/* <input 
                        className="date"
                        type="date"
                        value={patient.date}
                        onChange={e => setPatient({...patient, Date: e.target.value})}
                    /> */}

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

                {/* If pressed, go to Edit page ? */}
                {/* <button className="buttonExam" onClick={updateExamInfo}>UPDATE</button> */}
            </div>
        </div>
    );
}

export default Exam;