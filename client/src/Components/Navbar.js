import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import "./Navbar.css";
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

    return (
        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <h1>MEDTRACK</h1>
                </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
                <li className = "nav-item">
                    <NavLink exact to="/" activeClassName="active" className="nav-link" onClick={handleClick}>
                        <h2>Dashboard</h2>
                    </NavLink>
                </li>
                <li className = "nav-item">
                    <NavLink exact to="/admin" activeclassname="active" className="nav-link">
                        <h2>Admin</h2>
                    </NavLink>
                </li>
                <li className = "nav-item">
                    <NavLink exact to="/createpage" activeClassName="active" className="nav-link">
                        <h2>Create</h2>
                    </NavLink>
                </li>
            </ul>
            <div className="nav-icon">
            <NavLink exact to="/Admin" activeClassName="active" className="nav-link">
                <AssignmentIndIcon />
            </NavLink>
            </div>
            </div> 
        </nav>
    );
}

export default Navbar