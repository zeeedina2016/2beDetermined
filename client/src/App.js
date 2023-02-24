import './App.css';
import UpdatePage from './UpdatePage.js'

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  const id = "hello"

  return (
    
    <UpdatePage id={id} />
  );
}

export default App;
