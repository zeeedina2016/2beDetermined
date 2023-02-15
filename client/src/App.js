import './App.css';
import Admin from "./Components/Admin/admin.js";

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <Admin />
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

export default App;
