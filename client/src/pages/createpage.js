import '../css/createpage.css';

function Create() {
  return (
    <>
      <div className="create">
        <h1>CREATE EXAM</h1>
        <div className='buttonsContainer'>
          <button className="blueButton">Add Exam</button>
          <button className="blueButton">Random Exam</button>
          <button className="redButton">Cancel</button>
        </div>
        
        <div className='patientInfoDiv'>
          <div>
            <h2>Patient Info</h2>
            <h3>Patient ID:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <h3>Age:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <h3>Sex:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <h3>BMI:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <h3>Zip Code:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
          </div>
          
          
          <div>
          <h2>Exam Info</h2>
          <h3>Exam ID:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <h3>Image URL:</h3>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            
            <label>Brixia Score:</label>
            <div>
              <input className="textFields" type="text"></input>
            </div>
            <h3>Key Findings:</h3>
            <div >
              <input className="textFields" type="text"></input>
            </div>
        </div>
        </div>
      </div>
     
    </>
  );
}
export default Create;