import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { AiFillPhone } from "react-icons/ai";
import logo from "./../../Images/logo.png";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-img-container">
                <img
                    className="footer-img"
                    src={logo}
                    alt="Footer Logo"
                    role="presentation"
                />
            </div>
            <div className="footer-contact">
                <div className="footer-address">
                    <h3>LV Hair</h3>
                    <p>3 Bridge Street </p>
                    <p>Hereford, HR4 0DF</p>
                </div>
                <p className="footer-number">
                    {" "}
                    <span>
                        <AiFillPhone className="icon-svg" />
                    </span>
                    07801 899 240
                </p>
            </div>
            <div className="social-links-container">
                <h3>Follow Me</h3>
                <ul className="social-links">
                    <li>
                        <a
                            className="social-link"
                            href="https://www.facebook.com/claireholdenhairstylist"
                            target={"_blank"}
                        >
                            <span className="visually-hidden">
                                Facebook Link
                            </span>
                            <FaFacebook aria-hidden={true} focusable={false} />
                        </a>
                    </li>
                    <li>
                        <a
                            className="social-link"
                            href="https://www.instagram.com/claire_holden_hairstylist/?hl=en"
                            target={"_blank"}
                        >
                            <span className="visually-hidden">
                                Instagram Link
                            </span>
                            <FaInstagram aria-hidden={true} focusable={false} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
