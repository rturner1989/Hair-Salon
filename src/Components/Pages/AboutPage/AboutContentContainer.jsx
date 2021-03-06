import React from "react";
import { aboutContent, aboutFuture } from "../../../Data/Data";
import AboutIntroduction from "./AboutIntroduction";
import AboutContent from "./AboutContent";
import Break from "./Break";

const AboutContentContainer = () => {
    return (
        <div className="about-content-container">
            <AboutIntroduction />
            {aboutContent.map((content) => {
                return <AboutContent key={content.title} content={content} />;
            })}
            <Break />
            {aboutFuture.map((content) => {
                return <AboutContent key={content.title} content={content} />;
            })}
        </div>
    );
};

export default AboutContentContainer;
