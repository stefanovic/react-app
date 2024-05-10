import React from 'react';
import Logo from '../logo.svg'; // Assicurati di importare il tuo logo correttamente
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="Logo" />
        </div>
        <nav>
        <ul className="list-inline mb-0">
              <li className="list-inline-item mx-2">
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="/about" className="text-light text-decoration-none">About</Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link to="/contatti" className="text-light text-decoration-none">Contacts</Link>
              </li>
            </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;