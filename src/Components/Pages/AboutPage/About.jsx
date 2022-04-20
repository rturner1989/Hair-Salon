import React from "react";
import { Link } from "react-router-dom";
import AboutContent from "./AboutContent";
import AboutHeader from "./AboutHeader";

const About = () => {
    return (
        <main className="about-container">
            <AboutHeader />
            <AboutContent />
            <Link className="about-booking" to="/contact">
                <button className="bookingBtn">Enquire Now</button>
            </Link>
        </main>
    );
};

export default About;
