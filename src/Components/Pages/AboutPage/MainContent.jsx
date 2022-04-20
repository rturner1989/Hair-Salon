import React from "react";
import portraitImg from "./../../../Images/claire-about.webp";

const MainContent = () => {
    return (
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
                        After gaining my qualifications in Foundation and
                        Advanced hairdressing, I quickly worked my way up,
                        working from a Junior to Senior stylist.
                    </p>
                    <p>
                        My journey did not stop there, I was always chasing my
                        next big opportunity, and this led to me becoming Salon
                        Manager, overseeing a team of seven.
                    </p>
                    <p>I loved my job, and still do!</p>
                </div>
            </div>
        </section>
    );
};

export default MainContent;
