import '../css/createpage.css';
import React, { useEffect } from "react"
import { useParams, useNavigate } from 'react-router-dom'

export default function Create()
{
  const navigate = useNavigate();

  // Sets up initial values. TODO: Use patient id and exam id to fill out info
  const [values, setValues] = React.useState({
    Patient_ID: "",
    Age: "", 
    Sex: "", 
    Latest_BMI: "", 
    Zip: "", 
    Exam_id: "", 
    Png_Filename: "",
    Date: "", 
    Key_Findings: "",
    Brixa_Score: ""
  })

  //handles the changes when user type in input boxs. It changes the value pertaining to the input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const temp = {
      ...values,
      [name]: value,
    };
    setValues(temp);
  };

  //handles the submit button which is the update button
  async function handleSubmit(e) {
    e.preventDefault();
    const url = "https://atmedrecordsbackend.onrender.com/medrecords/";
    const response = await fetch(url, {
      method: 'POST', 
      body: JSON.stringify(values), 
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const json = await response.json()

    if (response.ok) {
      console.log("Post request successful");
      console.log(json);
      navigate("/admin")
    }

  }

  //handles the cancel button
  function handleClick(e) {
    e.preventDefault();
    console.log("cancel");
    navigate("/admin")
  }
  
  return (
    <div className="create">
        <h2>CREATE PAGE</h2>
        <div className="wrapper"> 
        <img src={logo} alt="medlogo" />
        </div>

        <form onSubmit={handleSubmit}>
        <div className='patientInfoDiv'>
          <div>
            <h2>Patient Info</h2>

            <label>Patient ID:</label>
            <div>
              <input name='Patient_ID' className="textFields" value={values.Patient_ID} onChange={handleInputChange}></input>
            </div>
            
            <label>Age:</label>
            <div>
              <input name='Age' className="textFields" value={values.Age} onChange={handleInputChange}></input>
            </div>
            
            <label>Sex:</label>
            <div>
              <input name='Sex' className="textFields" value={values.Sex} onChange={handleInputChange}></input>
            </div>
            
            <label>BMI:</label>
            <div>
              <input name='Latest_BMI' className="textFields" value={values.Latest_BMI} onChange={handleInputChange}></input>
            </div>
            
            <label>Zip Code:</label>
            <div>
              <input name='Zip' className="textFields" value={values.Zip} onChange={handleInputChange}></input>
            </div>
          </div>
          
          <div>
            <h2>Exam Info</h2>
            <label>Exam ID:</label>
            <div>
              <input name='Exam_id' className="textFields" value={values.Exam_id} onChange={handleInputChange}></input>
            </div>
            
            <label>Image URL:</label>
            <div>
              <input name='Png_Filename' className="textFields" value={values.Png_Filename} onChange={handleInputChange}></input>
            </div>
            
            <label>Brixia Score:</label>
            <div>
              <input name='Brixa_Score' className="textFields" value={values.Brixa_Score} onChange={handleInputChange}></input>
            </div>
            <label>Key Findings:</label>
            <div >
              <input name='Key_Findings' className="textFields" value={values.Key_Findings} onChange={handleInputChange}></input>
            </div>
          </div>
        </div>
        <div className='buttonsContainer'>
          <button className="blueButton" type='submit'>Add Exam</button>
          <button className="redButton">Cancel</button>
        </div>
      </form>
    </div>
  );
}
