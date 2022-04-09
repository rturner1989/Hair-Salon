import { Link } from "react-router-dom";
import logo from "./../../Images/logo.png";
import useWindowDimensions from "./../../Hooks/useWindowDimensions";

const Header = ({ toggleHamburger }) => {
    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width <= 950) {
        return (
            <header id="header">
                <div className="header-logo-contact">
                    <p>07801 899 240</p>
                    <p>claireholden.ch85@gmail.com</p>
                </div>
                <div>
                    <Link to="/">
                        <img
                            className="nav-img"
                            src={logo}
                            alt="Header Logo"
                            role="presentation"
                        />
                    </Link>
                </div>
                <div>
                    <button
                        className="hamburger-menu"
                        onClick={toggleHamburger}
                    >
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                    </button>
                </div>
            </header>
        );
    }

    return (
        <header id="header">
            <div className="header-logo-contact">
                <p>07801 899 240</p>
                <img
                    className="nav-img"
                    src={logo}
                    alt="Header Logo"
                    role="presentation"
                />
                <p>claireholden.ch85@gmail.com</p>
            </div>
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
