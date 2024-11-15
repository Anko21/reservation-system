import './NavBar.css';
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="navbar">
            <Link to="/" className="navbar__logo-link">
                <img
                    src={logo}
                    alt="Citrus Haven logo"
                    className="navbar__logo"
                />
            </Link>
            <nav className="navbar__nav">
                <ul className="navbar__list">
                    <li className="navbar__item">
                        <Link to="/" className="navbar__link">Home</Link>
                    </li>
                    <li className="navbar__item">
                        <Link to="/reservations" className="navbar__link">Reservations</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;