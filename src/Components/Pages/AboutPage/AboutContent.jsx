import React from "react";
import storeFront from "./../../../Images/shopFront.jpg";
import ExpandedContent from "./ExpandedContent";
import MainContent from "./MainContent";

const AboutContent = () => {
    return (
        <div className="about-content-container">
            <section className="introduction-section">
                <div className="main-heading">
                    <h1>About Me</h1>
                </div>
                <div className="introduction-statement">
                    <p>I began hairdressing in 2001.</p>
                    <div>
                        <p>
                            At the time, I was studying for my GCSE's while
                            working part time in a local salon called Escape.
                        </p>
                        <p>
                            Seeing peoples faces after they had visited the
                            salon made me realise how much I enjoyed seeing
                            people walk away happy.
                        </p>
                    </div>
                </div>
            </section>
            <MainContent />
            <ExpandedContent />
            <section className="break-section">
                <div className="personal-quote personal-quote3">
                    <p>
                        <i>
                            I enjoy giving helpful styling tips and teaching
                            techniques allowing my clients to style there hair
                            for days to come.
                        </i>
                    </p>
                </div>
            </section>
            <section className="current-work-section">
                <div className="img-container-large">
                    <img className="outsideSalon-img" src={storeFront} alt="" />
                </div>
                <div className="main-content-container">
                    <div className="sub-heading">
                        <h2>LV Hair</h2>
                    </div>
                    <div className="personal-quote personal-quote4">
                        <p>
                            <i>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas ipsa minima consequatur
                                consectetur nam placeat.
                            </i>
                        </p>
                    </div>
                    <div className="indepth-info3">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quas ipsa minima consequatur consectetur nam
                            placeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quas ipsa minima consequatur consectetur nam
                            placeat.
                        </p>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Quas ipsa minima consequatur consectetur nam
                            placeat.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutContent;
