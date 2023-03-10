import '../css/exampage.css';
import React, { useState } from 'react';
import '../App.css';
// import data from '../fakeData.json';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-boostrap/Col';

function Exam() {
    // const [patient, setPatient] = useState({
    //     id: "",
    //     age: "",
    //     sex: "",
    //     bmi: "",
    //     zipCode: "",
    //     examID: "",
    //     imageURL: "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png",
    //     date: "",
    //     keyFindings: "",
    // });

    const [updatePatient, setUpdatePatient] = useState(false);
    const [updateExam, setUpdateExam] = useState(false);

    /* I tried to fetch data from a fake json file, but doesn't seem to work :( */
    // useEffect(() => {
    //     setPatient(data)
    //     console.log(data)
    // }, []);

    // if (!patient) {
    //     return <h1>Loading...</h1>
    // }

    const [patient, setPatient] = useState({
        id: "COVID-19-AR-16406513",
        age: 44,
        sex: "M",
        bmi: 32.3,
        zipCode: 722,
        examID: "Exam-3",
        imageURL: "https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/COVID-19-AR-16434381_XR_CHEST_AP_ONLY_1.png",
        date: "2023-01-01",
        keyFindings: "",
    });

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

    const updatePatientInfo = () => {
        setUpdatePatient(!updatePatient)
    };

    const updateExamInfo = () => {
        setUpdateExam(!updateExam)
    };

    return (
        <div className="page">
            <div className="col1">
                <h1 className="col1_H">Patient Information</h1>
                <>
                    <h4 className="patientID_H">Patient ID</h4>
                    <div className="patientID">{patient.id}</div>

                    <h4 className="age_H">Age</h4>
                    <div className="age">{patient.age} </div>

                    <h4 className="sex_H">Sex</h4>
                    <div className="sex">{patient.sex}</div>

                    <h4 className="bmi_H">BMI</h4>
                    <div className="bmi">{patient.bmi}</div>

                    <h4 className="zipCode_H">ZipCode</h4>
                    <div className="zipCode">{patient.zipCode}</div>
                </>

                {/* If pressed, go to Edit page ? */}
                <button className="buttonPatient" onClick={updatePatientInfo}>UPDATE</button>
            </div>

            <div className="col2">
                <h1 className="col2_H">Exam Information</h1>
                <>
                    <img 
                        className="img"
                        src={patient.imageURL}
                        alt={patient.imageURL}
                    />

                    <h4 className="examID_H">Exam ID</h4>
                    <div className="examID">{patient.examID}</div>

                    {/* Will likely useState here once styling */}
                    <h4 className="subObjectHeadings">Date</h4>
                    <input 
                        className="subObjectData"
                        type="date"
                        value={patient.date}
                        onChange={e => setPatient({...patient, date: e.target.value})}
                    />

                    <h4 className="subObjectHeadings">Image URL</h4>
                    <div className="subObjectData">{patient.imageURL}</div>

                    <h4 className="subObjectHeadings">Exam Details</h4>
                    <input 
                        className="subObjectData"
                        type="text"
                        value={patient.keyFindings}
                        onChange={e => setPatient({...patient, keyFindings: e.target.value})}
                    />
                </>

                {/* If pressed, go to Edit page ? */}
                <button className="buttonExam" onClick={updateExamInfo}>UPDATE</button>
            </div>
        </div>
    );
}

export default Exam;