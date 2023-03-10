import '../css/updatepage.css';
import logo from "../medlogo.png";

import React, { useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom'

export default function UpdatePage() {

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

  const {id} = useParams()
  
  useEffect(() => {
    const fetchMedRecords = async () => {
      const url = "https://atmedrecordsbackend.onrender.com/medrecords/" + id
      const response = await fetch(url)
      const json = await response.json()

      console.log(json)

      if (response.ok) {
        setValues({
          Patient_ID: (json.Patient_ID == undefined) ? "": json.Patient_ID,
          Age: (json.Age == undefined) ? "": json.Age, 
          Sex: (json.Sex == undefined) ? "": json.Sex,
          Latest_BMI: (json.Latest_BMI == undefined) ? "": json.Latest_BMI, 
          Zip: (json.Zip == undefined) ? "": json.Zip, 
          Exam_id: (json.Exam_id == undefined) ? "": json.Exam_id, 
          Png_Filename: (json.Png_Filename == undefined) ? "": json.Png_Filename, 
          Date: (json.Date == undefined) ? "": json.Date, 
          Key_Findings: (json.Key_Findings == undefined) ? "": json.Key_Findings, 
          Brixa_Score: (json.Brixa_Score == undefined) ? "": json.Brixa_Score, 
        })
        
      } else {
        console.log("error happened")
      }
    }

    fetchMedRecords(id)
  }, [id])

  //handles the changes when user type in input boxs. It changes the value pertaining to the input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handles the submit button which is the update button
  async function handleSubmit(e) {
    e.preventDefault();
   
    const url = "https://atmedrecordsbackend.onrender.com/medrecords/"  + id
    const response = await fetch(url, {
      method: 'PATCH', 
      body: JSON.stringify(values), 
      headers: {
        "Content-Type" : "application/json"
      }
    })
    const json = await response.json()

    if (response.ok) {
      console.log("patch request successful")
      console.log(json)
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
    // All of this is the various components of the form. Still need to style thought
    <div className='form'>
    <form onSubmit={handleSubmit}>

      <div className="wrapper"> 
        <img src={logo} alt="medlogo" />
        <h2>EDIT PAGE</h2>
      </div>

      <div class='infoContainer'>
      <div className="patientInfo">
        <h2> Patient Info</h2>

        <label> Patient ID: </label>
        <div>
          <input className="textFields" type="text" name="Patient_ID" value={values.Patient_ID} onChange={handleInputChange}/>
        </div>
          
        <label>Age:</label>
        <div>
          <input className="textFields" type="text" name="Age" value={values.Age} onChange={handleInputChange}/>
        </div>
       
        <label>Sex:</label>
        <div>
          <input className="textFields" type="text" name="Sex" value={values.Sex} onChange={handleInputChange}/>
        </div>

        <label>BMI:</label>
        <div>
          <input className="textFields" type="text" name="Latest_BMI" value={values.Latest_BMI} onChange={handleInputChange}/>
        </div>
      
        <label>Zipcode:</label>
        <div>
          <input className="textFields" type="text" name="Zip" value={values.Zip} onChange={handleInputChange}/>
        </div>
        
      
      
      </div>

      <div className="examInfo">
        <h2> Exam Info</h2>

        <label>Exam ID:</label>
        <div>
        <input className="textFields" type="text" name="Exam_id" value={values.Exam_id} onChange={handleInputChange}/>
        </div>
        
      

        <label>Image URL:</label>
        <div>
        <input className="textFields" type="text" name="Png_Filename" value={values.Png_Filename} onChange={handleInputChange}/>
        </div>
        

        <div>
        <img src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + values.Png_Filename} alt="" width={250} height={250}/>
        </div>
          
        <label>Key Findings:</label>
        <div>
        <textarea className="textFields" name="Key_Findings" value={values.Key_Findings} onChange={handleInputChange}/>
        </div>
        
        <label>Brixia Score (separated by commas):</label>
        <div>
        <input className="textFields" type="text" name="Brixa_Score" value={values.Brixa_Score} onChange={handleInputChange}/>
        </div>
     
      
      </div>
      </div> 
      <div className='buttonsContainer'>
        <button className='submitButton' type="submit">Update</button>
        <button className='cancelButton' onClick={handleClick}>Cancel</button>
      </div>
    </form>
    </div>
  );
}
