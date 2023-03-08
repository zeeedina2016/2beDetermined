import '../css/admin.css';
import AdminComponent from "../Components/Admin/admin_component.js";
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
          <p>
            <Home />
          </p>
        </header>

      </div></>
      
      <div>
        <CreateButton/>
      </div></>
  );
}

  export default Admin;