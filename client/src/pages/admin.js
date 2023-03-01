import '../css/admin.css';
import AdminComponent from "../Components/Admin/admin_component.js";

import { useApi } from '../hooks/use-api';

function Admin() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <AdminComponent />
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

  export default Admin;