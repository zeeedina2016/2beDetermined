import '../css/dashboard.css';
import Dash from "../Components/Dashboard_companent.js";
import Search from "../Components/search.js";
import React from 'react';

function Dashboard() {
  
  return (
    <><><div className='search-container'>
      <Search />
    </div>

      <div className="App">

        <header className="App-header">
          <p className="pDiv" id='table'>
            <h1 class="component-title" align="left">Dashboard</h1>
          </p>
          <p>
            <Dash/>
          </p>
        </header>
      </div></>
      
     
      </>
  );
}

  export default Dashboard;