import '../css/admin.css';
import Home from "../Components/Admin/admin_component.js";
import CreateButton from '../Components/Create';

import Search from "../Components/search.js"

function Admin() {
  //const { response } = useApi();
  
  return (
    <><><div className='search-container'>
      <Search placeholder="Search..." />
    </div>

      <div className="App">

        <header className="App-header">
          <p className="pDiv" id='table'>
            <h1 class="admin-component-title" align="left">Admin Dashboard</h1>
          </p>
          
            <Home />

          <CreateButton />
        </header>
        

      </div></>
      
      </>
  );
}

  export default Admin;