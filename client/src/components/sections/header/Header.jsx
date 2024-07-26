import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-container">
            <div className="logo-container">
                <Link to="/">
                    <img src={Logo} alt="Logo" />
                </Link>
                <Link to="/">
                    <h1>Aktuarios Desarrollo Actuarial S. C.</h1>
                </Link>
            </div>
            <nav className="navigation-container">
                <ul>
                    <li>
                        <Link to="/nosotros">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/servicios">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/clientes">Clientes</Link>
                    </li>
                    <li>
                        <Link to="/contactanos">Contactanos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;