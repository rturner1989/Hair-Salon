import React from "react";
import { Link } from "react-router-dom";
import AboutContentContainer from "./AboutContentContainer";
import AboutHeader from "./AboutHeader";

const About = () => {
    return (
        <main className="about-container">
            <AboutHeader />
            <AboutContentContainer />
            <Link className="about-booking" to="/contact">
                <button className="bookingBtn">Enquire Now</button>
            </Link>
        </main>
    );
};

export default About;
