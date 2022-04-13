import React from "react";
import { Link } from "react-router-dom";
import aboutHero from "./../../../Images/about-header.webp";
import portraitImg from "./../../../Images/claire-about.webp";
import storeFront from "./../../../Images/shopFront.jpg";
import workingImg from "./../../../Images/workingImage.jpg";

const About = () => {
    return (
        <main className="about-container">
            <header className="about-header-container">
                <div className="about-header-content">
                    <h1>Claire Holden</h1>
                    <p>
                        A self employed professional with years of experience
                        within the Hair industry, I provide a service tailored
                        to each of my clients at an affordable price.
                    </p>
                </div>
                <img
                    className="about-header-img"
                    src={aboutHero}
                    alt=" Collage of images showing different hair styles and colours"
                />
            </header>
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
                                working part time in a local salon called
                                Escape.
                            </p>
                            <p>
                                Seeing peoples faces after they had visited the
                                salon made me realise how much I enjoyed seeing
                                people walk away happy.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="main-content-section">
                    <div className="img-container">
                        <img
                            className="section-img portrait-img"
                            src={portraitImg}
                            alt=""
                        />
                    </div>
                    <div className="main-content-container">
                        <div className="sub-heading">
                            <h2>In the beginning</h2>
                        </div>
                        <div className="personal-quote personal-quote1">
                            <p>
                                <i>
                                    I would describe my style of hairdressing as
                                    naturally beautiful.
                                </i>
                            </p>
                        </div>
                        <div className="indepth-info1">
                            <p>
                                After gaining my qualifications in Foundation
                                and Advanced hairdressing, I quickly worked my
                                way up, working from a Junior to Senior stylist.
                            </p>
                            <p>
                                My journey did not stop there, I was always
                                chasing my next big opportunity, and this led to
                                me becoming Salon Manager, overseeing a team of
                                seven.
                            </p>
                            <p>I loved my job, and still do!</p>
                        </div>
                    </div>
                </section>
                <section className="expanded-about-me-section">
                    <div className="main-content-container">
                        <div className="sub-heading">
                            <h2>Where i am now</h2>
                        </div>
                        <div className="personal-quote2">
                            <p>
                                <i>
                                    I like to create styles that my clients are
                                    able to recreate in their own homes.
                                </i>
                            </p>
                        </div>
                        <div className="indepth-info2">
                            <p>
                                In 2015, I left the industry, going away and
                                learning new skills which have helped solidify
                                who I am today.
                            </p>
                            <p>
                                But! Salon life was ingrained in who I am, so in
                                2018 I became a self-employed Hair Stylist.
                            </p>
                            <p>
                                So here I am, self-employed at the LV Hair salon
                                and loving it!
                            </p>
                            <p>
                                I have many wonderful clients and am always
                                overjoyed with meeting new people and seeing
                                many more happy faces leave the salon.
                            </p>
                        </div>
                    </div>
                    <div className="img-container">
                        <img
                            className="section-img working-img"
                            src={workingImg}
                            alt=""
                        />
                    </div>
                </section>
                <section className="break-section">
                    <div className="personal-quote personal-quote3">
                        <p>
                            <i>
                                I enjoy giving helpful styling tips and teaching
                                techniques allowing my clients to style there
                                hair for days to come.
                            </i>
                        </p>
                    </div>
                </section>
                <section className="current-work-section">
                    <div className="img-container-large">
                        <img
                            className="outsideSalon-img"
                            src={storeFront}
                            alt=""
                        />
                    </div>
                    <div className="main-content-container">
                        <div className="sub-heading">
                            <h2>LV Hair</h2>
                        </div>
                        <div className="personal-quote personal-quote4">
                            <p>
                                <i>
                                    Lorem ipsum dolor sit, amet consectetur
                                    adipisicing elit. Quas ipsa minima
                                    consequatur consectetur nam placeat.
                                </i>
                            </p>
                        </div>
                        <div className="indepth-info3">
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas ipsa minima consequatur
                                consectetur nam placeat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas ipsa minima consequatur
                                consectetur nam placeat.
                            </p>
                            <p>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quas ipsa minima consequatur
                                consectetur nam placeat.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            <Link className="about-booking" to="/contact">
                <button className="bookingBtn">Enquire Now</button>
            </Link>
        </main>
    );
};

export default About;
