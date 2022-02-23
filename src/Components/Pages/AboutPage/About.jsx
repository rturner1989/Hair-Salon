import React from "react";
import Zoom from "react-reveal/Zoom";

const About = () => {
    return (
        <div className="about-container">
            <header className="about-header-container">
                <div className="about-header-content">
                    <h1>Claire Holden</h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ipsum, perspiciatis! Et consectetur reiciendis
                        assumenda, maiores ad natus dolorem iusto voluptatum?
                    </p>
                </div>
                <img
                    className="about-header-img"
                    src="./Images/about-header.jpg"
                    alt=""
                />
            </header>
            <main className="about-content-container">
                <aside className="about-basic-info">
                    <img
                        className="about-img"
                        style={{ maxWidth: 300 }}
                        src="./Images/claire-about.jpg"
                        alt=""
                    />
                    <p>
                        I would describe my style of hairdressing as naturally
                        beautiful.
                    </p>
                    <p>
                        I like to create styles that my clients are able to
                        recreate in their own homes.
                    </p>
                    <p>
                        I enjoy giving helpful styling tips and teaching
                        techniques allowing my clients to style there hair for
                        days to come.
                    </p>
                </aside>
                <section className="about-indepth-info">
                    <h2>A little bit about me</h2>
                    <div className="indepth-paragraph">
                        <p>I began hairdressing in 2001!</p>
                        <Zoom>
                            <p>
                                At the time, I was studying for my GCSE's while
                                working part time in a local salon called
                                Escape.
                            </p>
                        </Zoom>
                        <p>
                            Seeing peoples faces after they had visited the
                            salon made me realise how much I enjoyed seeing
                            people walk away happy.
                        </p>
                        <p>
                            After gaining my qualifications in Foundation and
                            Advanced hairdressing, I quickly worked my way up,
                            working from a Junior to Senior stylist.
                        </p>
                        <p>
                            My journey did not stop there, I was always chasing
                            my next big opportunity, and this led to me becoming
                            Salon Manager, overseeing a team of seven.
                        </p>
                        <p>I loved my job, and still do!</p>
                    </div>
                    <div className="indepth-paragraph">
                        <p>
                            In 2015, I left the industry, going away and
                            learning new skills which have helped solidify who I
                            am today.
                        </p>
                        <p>
                            But! Salon life was ingrained in who I am, so in
                            2018 I became a self-employed Hair Stylist.
                        </p>
                        <p>
                            This presented its own challenges, many people said
                            I was crazy, that I had no clientele and would be
                            starting from zero.
                        </p>
                        <p>
                            I took this critism and used it as motivation to
                            keep me moving forward.
                        </p>
                        <p>
                            So here I am, self-employed at the LV Hair salon and
                            loving it!
                        </p>
                        <p>
                            I have many wonderful clients and am always
                            overjoyed with meeting new people and seeing many
                            more happy faces leave the salon.
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default About;
