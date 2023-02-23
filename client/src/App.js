import './App.css';
import UpdatePage from './UpdatePage.js'

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    //This is how to use the UpdatePage as it returns a fuction UpdatePage and this calls this function which will render what UpdatePage returns
    <UpdatePage />
  );
}

export default App;
