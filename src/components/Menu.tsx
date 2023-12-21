// Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Menu.css';
import Logo from '../images/logo.png';

const Navbar: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <section className={`hero-section ${isMenuOpen ? 'menu-open' : ''}`}>
      <nav className={`navbar ${isMenuOpen ? 'navbar-open' : ''}`}>
        <div className="data-container">
          <img className="Logo" src={Logo} alt="Logo" />
          <div className={`menu-data animate__animated ${isMenuOpen ? 'animate__fadeInRight' : 'animate__fadeOut'}`} style={{ right: isMenuOpen ? '0' : '-100%' }}>
            <a onClick={toggleMenu}><i id="close" className="size fa-solid fa-xmark"></i></a>
            <Link to="/inicio">Inicio</Link>
            <Link to="/habitaciones">Habitaciones</Link>
            <Link to="/contactos">Contactos</Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
