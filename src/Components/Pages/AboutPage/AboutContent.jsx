import React from "react";

const AboutContent = ({ content }) => {
    const { img, imgAlt, title, personalQuote, indepthInfo, reverse } = content;
    return (
        <section
            className="main-content-section"
            id={reverse ? "about-reverse" : ""}
        >
            <div className="img-container">
                <img
                    className="section-img portrait-img"
                    src={img}
                    alt={imgAlt}
                />
            </div>
            <div className="main-content-container">
                <div className="sub-heading">
                    <h2>{title}</h2>
                </div>
                <div className="personal-quote">
                    <p>
                        <i>{personalQuote}</i>
                    </p>
                </div>
                <div className="indepth-info">
                    {indepthInfo.map((info, index) => {
                        return <p key={index}>{info}</p>;
                    })}
                </div>
            </div>
        </section>
    );
};

export default AboutContent;
