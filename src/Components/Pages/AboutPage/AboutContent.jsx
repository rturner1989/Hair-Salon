import React from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const AboutContent = ({ content }) => {
    const { img, imgAlt, title, personalQuote, indepthInfo, reverse } = content;

    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width <= 430) {
        return (
            <section
                className="main-content-section-mobile"
                id={reverse ? "about-reverse-mobile" : ""}
            >
                <div className="sub-heading-mobile">
                    <h2>{title}</h2>
                </div>
                <div className="img-quote-mobile">
                    <div className="img-container-mobile">
                        <img
                            className="section-img-mobile portrait-img-mobile"
                            src={img}
                            alt={imgAlt}
                        />
                    </div>
                    <div className="personal-quote-mobile">
                        <p>
                            <i>{personalQuote}</i>
                        </p>
                    </div>
                </div>
                <div className="main-content-container-mobile">
                    <div className="indepth-info-mobile">
                        {indepthInfo.map((info, index) => {
                            return <p key={index}>{info}</p>;
                        })}
                    </div>
                </div>
            </section>
        );
    }

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
