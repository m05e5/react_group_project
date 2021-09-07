import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div className="nav-div">
        <ul className="navUl">
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
