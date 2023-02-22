import './App.css';
import UpdatePage from './UpdatePage.js'

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <UpdatePage />
  );
}

export default App;
