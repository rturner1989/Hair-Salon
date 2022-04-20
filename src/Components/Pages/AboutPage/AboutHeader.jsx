import React from "react";
import aboutHero from "./../../../Images/about-header.webp";

const AboutHeader = () => {
    return (
        <header className="about-header-container">
            <div className="about-header-content">
                <h1>Claire Holden</h1>
                <p>
                    A self employed professional with years of experience within
                    the Hair industry, I provide a service tailored to each of
                    my clients at an affordable price.
                </p>
            </div>
            <img
                className="about-header-img"
                src={aboutHero}
                alt=" Collage of images showing different hair styles and colours"
            />
        </header>
    );
};

export default AboutHeader;
