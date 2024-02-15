import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <div className='header'>
    <img src="./assets/logo.svg" alt="Logo du site Kasa" />
    <div className="nav-bar">
    <ul>
      <NavLink to="/home">
      <li>Acceuil</li>
      </NavLink>
      <NavLink to="/about">
        <li>A Propos</li>
      </NavLink>
    </ul>
    </div>
    </div>
  );
} 

export default Header;