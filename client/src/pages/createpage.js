import '../css/createpage.css';
import logo from "../medlogo.png";







function Create() {

  
  return (
    <>
      <div className="create">
        <div className="wrapper"> 
        <img src={logo} alt="medlogo" />
        <h2>CREATE PAGE</h2>
        </div>
        
        <div className='patientInfoDiv'>
          <div>
            <h2>Patient Info</h2>
        
            <label>Patient ID:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
    
            
            
            <label>Age:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>Sex:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>BMI:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>Zip Code:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
          </div>
          
          
          <div>
          <h2>Exam Info</h2>
          <label>Exam ID:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>Image URL:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>Brixia Score:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            <label>Key Findings:</label>
            <div >
              <input className="textFields" type="text"></input>
            </div>
        </div>
        </div>
        <div className='buttonsContainer'>
          <button className="blueButton">Add Exam</button>
          <button className="redButton">Cancel</button>
        </div>

      </div>
     
    </>
  );
}
export default Create;