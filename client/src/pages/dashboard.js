import '../css/dashboard.css';
import Dash from "../Components/Dashboard_companent.js";
import Search from "../Components/search.js";

function Dashboard() {
  
  return (
    <><><div className='search-container'>
      <Search />
    </div>

      <div className="App">

        <header className="App-header">
          <p>
            <Dash/>
          </p>
        </header>
      </div></>
      
     
      </>
  );
}

  export default Dashboard;