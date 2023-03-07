import React from 'react';
//import TodoList from './TodoList';
import './App.css'
import { BrowserRouter, Routes, Route }  from 'react-router-dom'

//pages & Components
import Create from './pages/createpage';
import Exams from './pages/dashboard';
import Admin from './pages/admin';
import Navbar from './Components/Navbar';
import updatePage from './pages/updatepage';
function App() {
  return (
    //routing for the pages Exam/Admin and Create
      <BrowserRouter>
        <Navbar />
          <div className="pages">
            <Routes>
                <Route path="/dashboard" element={<Exams />}/>
                <Route path="/admin" element={<Admin />}/>
                <Route path="/createpage" element={<Create />}/>
                <Route path="/admin/updatepage/:id" element={<updatePage />}/>
            </Routes>
          </div>
       </BrowserRouter>
  );
}

export default App;