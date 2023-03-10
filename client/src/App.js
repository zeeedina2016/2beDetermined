import React from 'react';
//import TodoList from './TodoList';
import './App.css'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'

//pages & Components
import Create from './pages/createpage';
import Dashboard from './pages/dashboard';
import Admin from './pages/admin';
import Navbar from './Components/Navbar';
import UpdatePage from './pages/updatepage';
import Exam from './pages/exampage';

function App() {
  return (
    //routing for the pages Exam/Admin and Create
      <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
                <Route path="/" element={<Dashboard />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/createpage" element={<Create />}/>
                <Route path="/admin/:id" element={<UpdatePage />}/>
                 <Route path="/exam/:id" element={<Exam />}/>
            </Routes>
          </div>
       </BrowserRouter>
  );
}

export default App;
