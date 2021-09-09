import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/planet.png';
import './Nav.css';

const Header = () => (
  <header>
    <div className="logo-title-wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="nav-title">Space Travelers&#39;s Hub</h1>
    </div>
    <nav>
      <div className="nav-div nav-list">
        <ul className="navUl nav-rockets">
          <li>
            <Link to="/" className="navLink">Rockets</Link>
          </li>
          <li>
            <Link to="/missions" className="navLink">Missions</Link>
          </li>
          <li>
            <Link to="/myProfile" className="navLink">My Profile</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default Header;
