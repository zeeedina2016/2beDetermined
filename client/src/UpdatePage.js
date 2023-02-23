import React from "react";
//TODO: create UpdatePage.css to style everything
import './UpdatePage.css'

function getInfo() {
  const initial_data = ["hi", "hello", "great"]
  return initial_data
}



export default function UpdatePage(props) {

  // Sets up initial values. TODO: Use patient id and exam id to fill out info
  const [values, setValues] = React.useState({
    PatientID: "",
    Age: "", 
    Sex: "", 
    BMI: "", 
    Zipcode: "", 
    ExamID: "", 
    ImageURL: "",
    Date: "", 
    KeyFindings: "",
    BrixiaScore: ""
  })

  const url = "localhost:4000/medrecords/" + props.id
  useEffect(() => {
    
    fetch(url)
       .then((res) => res.json())
       .then((data) => {
          console.log(data);
          
       })
       .catch((err) => {
          console.log(err.message);
       });
  }, []);

  //handles the changes when user type in input boxs. It changes the value pertaining to the input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  //handles the submit button which is the update button
  function handleSubmit(e) {
    e.preventDefault();
    //As of now, just print out the dictionary of values
    console.log(values);
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
        <button className='submitButton' type="submit">Add Exam</button>
        <button className='cancelButton' onClick={handleClick}>Cancel</button>
      </div>

      <div class='infoContainer'>
      <div className="patientInfo">
        <h2> Patient Info</h2>

        <label>
        <b>Patient ID:</b> <br/>
        <input type="text" name="PatientID" value={values.PatientID} onChange={handleInputChange}/>
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
        <input type="text" name="BMI" value={values.BMI} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Zipcode:</b><br/>
        <input type="text" name="Zipcode" value={values.Zipcode} onChange={handleInputChange}/>
        </label>
        <br/>
      
      </div>

      <div className="examInfo">
        <h2> Exam Info</h2>

        <label>
        <b>Exam ID:</b> <br/>
        <input type="text" name="ExamID" value={values.ExamID} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Image URL:</b><br/>
        <input type="text" name="ImageURL" value={values.ImageURL} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <img src={values.ImageURL} alt="" width={250} height={250}/>
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
        <textarea name="KeyFindings" value={values.KeyFindings} onChange={handleInputChange}/>
        </label>
        <br/>

        <br/>
        <label>
        <b>Brixia Score (separated by commas):</b><br/>
        <input type="text" name="BrixiaScore" value={values.BrixiaScore} onChange={handleInputChange}/>
        </label>
        <br/>
        <br/>
      
      </div>
      </div> 
    </form>
    </div>
  );
}

