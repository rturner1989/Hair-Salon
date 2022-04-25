import React from "react";
import { Link } from "react-router-dom";
import headerImg from "./../../../Images/BEAUTI~1 copy.webp";

const HomeHeader = () => {
    return (
        <header className="home-header">
            <a
                className="home-header-attr"
                href="https://www.freepik.com/photos/smooth-hair"
            >
                Smooth hair photo created by master1305
            </a>
            <div className="home-header-blurb-container">
                <div className="home-header-blurb">
                    <h3>Welcome</h3>
                    <p>
                        A warm welcome to all my customers! My name is Claire
                        Holden and I pride myself in giving a personalised and
                        quality service that will leave you feeling exquisite.
                    </p>
                    <p
                        style={{
                            fontSize: "0.9rem",
                            textTransform: "uppercase",
                            letterSpacing: "0.2rem",
                            fontWeight: "800",
                        }}
                    >
                        <i>
                            HBA Hair & Beauty Finalist
                            <br />
                            Hair Stylist of the year 2022
                        </i>
                    </p>
                    <Link to="/contact">
                        <button className="bookingBtn">Enquire Now</button>
                    </Link>
                </div>
            </div>
            <img className="home-header-img" src={headerImg} alt="" />
        </header>
    );
};

export default HomeHeader;
