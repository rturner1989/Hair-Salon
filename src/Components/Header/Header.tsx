import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header id="header">
            <img className="nav-img" src="./Images/logo.png" alt="" />
            <nav className="nav-container">
                <ul className="nav-list">
                    <li>
                        <Link className="link" to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link className="link" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
