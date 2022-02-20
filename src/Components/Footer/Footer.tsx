import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer id="footer">
            <img className="footer-img" src="./Images/logo.png" alt="" />
            <div className="footer-contact">
                <div className="footer-address">
                    <h3>LV Hair</h3>
                    <p>3 Bridge Street </p>
                    <p>Hereford, HR4 0DF</p>
                </div>
                <p className="footer-number">Contact: 07801 899 240</p>
                <p className="footer-email">
                    Email: claireholden.ch85@gmail.com
                </p>
            </div>
            <ul className="social-links">
                <li>
                    <a
                        className="social-link"
                        href="https://www.facebook.com/claireholdenhairstylist"
                    >
                        <span className="visually-hidden">Facebook Link</span>
                        <FaFacebook aria-hidden={true} focusable={false} />
                    </a>
                </li>
                <li>
                    <a
                        className="social-link"
                        href="https://www.instagram.com/claire_holden_hairstylist/?hl=en"
                    >
                        <span className="visually-hidden">Instagram Link</span>
                        <FaInstagram aria-hidden={true} focusable={false} />
                    </a>
                </li>
            </ul>
        </footer>
    );
};

export default Footer;
