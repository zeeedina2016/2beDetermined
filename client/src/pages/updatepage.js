import '../css/updatepage.css';

import React, { useEffect } from "react";

export default function UpdatePage(props) {

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

  const id = props.id

  useEffect(() => {
    const fetchMedRecords = async () => {
      const url = '/medrecords/' + id
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
   
    const url = '/medrecords/' + id
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
    }

  }

  //handles the cancel button
  function handleClick(e) {
    e.preventDefault();
    console.log("cancel");
  }

  return (  
    // All of this is the various components of the form. Still need to style thought
    <div className='form'>
    <form onSubmit={handleSubmit}>
      <h1> Edit Exam</h1>

      <div className='buttonsContainer'>
        <button className='submitButton' type="submit">Update</button>
        <button className='cancelButton' onClick={handleClick}>Cancel</button>
      </div>

      <div class='infoContainer'>
      <div className="patientInfo">
        <h2> Patient Info</h2>

        <label>
        <b>Patient ID:</b> <br/>
        <input type="text" name="Patient_ID" value={values.Patient_ID} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Age:</b><br/>
        <input type="text" name="Age" value={values.Age} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Sex:</b><br/>
        <input type="text" name="Sex" value={values.Sex} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>BMI:</b><br/>
        <input type="text" name="Latest_BMI" value={values.Latest_BMI} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Zipcode:</b><br/>
        <input type="text" name="Zip" value={values.Zip} onChange={handleInputChange}/>
        </label>
        <br/>
      
      </div>

      <div className="examInfo">
        <h2> Exam Info</h2>

        <label>
        <b>Exam ID:</b> <br/>
        <input type="text" name="Exam_id" value={values.Exam_id} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Image URL:</b><br/>
        <input type="text" name="Png_Filename" value={values.Png_Filename} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <img src={"https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/" + values.Png_Filename} alt="" width={250} height={250}/>
        <br/>

        <br/>
        <label>
        <b>Date:</b><br/>
        <input type="text" name="Date" value={values.Date} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Key Findings:</b><br/>
        <textarea name="Key_Findings" value={values.Key_Findings} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Brixia Score (separated by commas):</b><br/>
        <input type="text" name="Brixa_Score" value={values.Brixa_Score} onChange={handleInputChange}/>
        </label>
        <br/>
        <br/>
      
      </div>
      </div> 
    </form>
    </div>
  );
}
