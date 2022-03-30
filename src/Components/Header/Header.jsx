import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <img
                className="nav-img"
                src="./Images/logo.png"
                alt="Header Logo"
                role="presentation"
            />
            <nav className="nav-container">
                <ul className="nav-list">
                    <li>
                        <Link className="nav-link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
