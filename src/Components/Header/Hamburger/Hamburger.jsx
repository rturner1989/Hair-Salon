import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

const Hamburger = ({ isShown, closeHamburger }) => {
    return (
        <nav
            className={
                isShown
                    ? "hamburger-container menu-shown"
                    : "hamburger-container"
            }
        >
            <button className="close-btn" onClick={closeHamburger}>
                <AiOutlineClose />
            </button>
            <ul className="nav-list hamburger-nav-list">
                <li>
                    <Link
                        id="homeLink"
                        className="nav-link hamburger-nav-link"
                        onClick={closeHamburger}
                        to="/"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        id="aboutLink"
                        className="nav-link hamburger-nav-link"
                        onClick={closeHamburger}
                        to="/about"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        id="serviceLink"
                        className="nav-link hamburger-nav-link"
                        onClick={closeHamburger}
                        to="/services"
                    >
                        Services
                    </Link>
                </li>
                <li>
                    <Link
                        id="contactLink"
                        className="nav-link hamburger-nav-link"
                        onClick={closeHamburger}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Hamburger;
