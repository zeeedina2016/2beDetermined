import React from 'react';
import './App.css';

import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {response}
        </p>
      </header>
    </div>
  );
}

function hello() {
  return React.createElement('div', null, 'Hello Testing');
}

export default App;
