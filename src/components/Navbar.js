import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearhBar from './SearchBar';
import { ThemeContext } from '../contexts/ThemeContext';

function Navbar() {
 const { color } = useContext(ThemeContext);
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-${color}`}>
        <div className="container">
            <Link className="navbar-brand" to='/'>Yemek Tarifleri</Link>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/create">Create</NavLink>
                </li>
            </ul>
            <SearhBar />
        </div>
    </nav>
  )
}

export default Navbar;