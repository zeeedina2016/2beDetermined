import './App.css';
import UpdatePage from './UpdatePage.js'

import { useApi } from './hooks/use-api';

function App() {
  
  const id = "63fd5161249b9ceaa4ba1b51"

  return (
    
    <UpdatePage id={id} />
  );
}

export default App;
