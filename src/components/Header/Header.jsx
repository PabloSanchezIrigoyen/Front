import React, { useState } from 'react';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const location = useLocation();

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened ? '-100%' : '2rem' };
    }
    return {};
  };

  const isActive = (path) => (location.pathname === path ? 'active' : '');

  return (
    <section className="h-wrapper">
      <div className="h-container">
        <Link to="/">
          <img src="./logo.png" alt="logo" width={100} />
        </Link>

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/cabanas" className={isActive('/cabanas')}>
              Cabañas
            </Link>

            <a href="#contacto" className="menu-anchor">
              Contacto
            </a>

            <Link to="/reservas" className={isActive('/reservas')}>
              Reservas
            </Link>

            <Link to="/perfil" className={isActive('/perfil')}>
              Perfil
            </Link>

            <Link to="/login" className="button">
              Iniciar Sesión
            </Link>
          </div>
        </OutsideClickHandler>

        <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
