import React from 'react';
//import TodoList from './TodoList';
import './App.css'
function App() {
  return (
    <>
      <div className='headerDiv'>
        <div className='navBarExamDiv'>
          <a href="https://order.wendys.com/categories?site=menu">Exams</a>
        </div>
        <div className='navBarAdminDiv'>
          <a href="https://order.wendys.com/categories?site=menujkjk">Admin</a>
        </div>
      </div>
      <h1>Create Exam</h1>
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
          
          <h3>URL:</h3>
          <div>
            <input className="textFields" type="text"></input>
          </div>
          
          <h3>Key Findings:</h3>
          <div>
            <input className="textFields" type="text"></input>
          </div>
          
          <h3>Brixia Score:</h3>
          <div>
            <input className="textFields" type="text"></input>
          </div>
      </div>
      </div>
    </>
  );
}
export default App;