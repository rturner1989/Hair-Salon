import { useState } from "react";
import { Link } from "react-router-dom";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const HomePage = () => {
    const [isTileHover, setIsTileHover] = useState({
        img1: false,
        img2: false,
        img3: false,
        img4: false,
    });

    return (
        <main className="homePage">
            <header className="home-header">
                <div className="home-header-blurb-container">
                    <div className="home-header-blurb">
                        <h3>Welcome</h3>
                        <p>
                            A warm welcome to all my customers! My name is
                            Claire Holden and I pride myself in giving a
                            personalised and quality service that will leave you
                            feeling exquisite.
                        </p>
                        <p>
                            <i>
                                HBA Hair & Beauty Finalist
                                <br />
                                Hair Stylist of the year 2022
                            </i>
                        </p>
                        <Link to="/contact">
                            <button className="bookingBtn">Enquire Now</button>
                        </Link>
                    </div>
                </div>
                <img
                    className="home-header-img"
                    src={process.env.PUBLIC_URL + "/Images/BEAUTI~1 copy.jpg"}
                    alt=""
                />
            </header>
            <section className="tile-section">
                <div className="tile-container">
                    <div className="tile tile-text">
                        <h4>Quality Service</h4>
                        <p>
                            I pride myself in taking care of each of my clients,
                            listening to any concerns you may have and adapting
                            my technique to leave you feeling wonderful.
                        </p>
                    </div>
                    <div
                        className="tile"
                        onMouseEnter={() => setIsTileHover({ img1: true })}
                        onMouseLeave={() => setIsTileHover({ img1: false })}
                    >
                        <img
                            className="tile-img"
                            src={
                                process.env.PUBLIC_URL +
                                "/Images/composition-with-hair-extension-accessories-dark-background.jpg"
                            }
                            alt=""
                        />
                        <div
                            className={
                                isTileHover.img1
                                    ? "tile-hover active"
                                    : "tile-hover"
                            }
                        >
                            <p>Hello World</p>
                        </div>
                    </div>
                    <div className="tile tile-text">
                        <h4>Any Type of Hair</h4>
                        <p>
                            Curly, Straight, Long or Short. All hair types are
                            welcome.
                        </p>
                    </div>
                    <div
                        className="tile"
                        onMouseEnter={() => setIsTileHover({ img2: true })}
                        onMouseLeave={() => setIsTileHover({ img2: false })}
                    >
                        <img
                            className="tile-img"
                            src={process.env.PUBLIC_URL + "/Images/redhead.jpg"}
                            alt=""
                        />
                        <div
                            className={
                                isTileHover.img2
                                    ? "tile-hover active"
                                    : "tile-hover"
                            }
                        >
                            <p>Hello World</p>
                        </div>
                    </div>
                    <div
                        className="tile"
                        onMouseEnter={() => setIsTileHover({ img3: true })}
                        onMouseLeave={() => setIsTileHover({ img3: false })}
                    >
                        <img
                            className="tile-img"
                            src={
                                process.env.PUBLIC_URL +
                                "/Images/Smiling-Woman.jpg"
                            }
                            alt=""
                        />
                        <div
                            className={
                                isTileHover.img3
                                    ? "tile-hover active"
                                    : "tile-hover"
                            }
                        >
                            <p>Hello World</p>
                        </div>
                    </div>
                    <div className="tile tile-text">
                        <h4>Great Prices</h4>
                        <p>A price to match any service needed.</p>
                    </div>
                    <div
                        className="tile"
                        onMouseEnter={() => setIsTileHover({ img4: true })}
                        onMouseLeave={() => setIsTileHover({ img4: false })}
                    >
                        <img
                            className="tile-img"
                            src={
                                process.env.PUBLIC_URL +
                                "/Images/woman-mixing-hair-dye-bowl.jpg"
                            }
                            alt=""
                        />
                        <div
                            className={
                                isTileHover.img4
                                    ? "tile-hover active"
                                    : "tile-hover"
                            }
                        >
                            <p>Hello World</p>
                        </div>
                    </div>
                    <div className="tile tile-text">
                        <h4>The Best Tools for the Job</h4>
                        <p>
                            Employing the latest techniques, no job is too big
                            for me. Only the best equipment is used to ensure a
                            quality service throughout.
                        </p>
                    </div>
                </div>
            </section>
            <section className="review-section">
                <h3 className="review-heading">
                    This is what my clients have said...
                </h3>
                <div className="reviews-container">
                    <div className="review review1">
                        <ImQuotesLeft className="review-icon icon-left" />
                        <p className="review-content">
                            Had my hair done by Claire for colour correction (by
                            a different salon) Claire did an amazing job and I
                            can’t wait for my next appointment, super talented
                            and an excellent hairdresser 😍
                        </p>
                        <ImQuotesRight className="review-icon icon-right" />
                    </div>
                    <div className="review review2">
                        <ImQuotesLeft className="review-icon icon-left" />
                        <p className="review-content">
                            Was lucky enough to win a competition for a hair
                            treatment with cut and blow dry. Lovely products
                            used and really pleased with the result. Would def
                            recommend Claire. thank you again x
                        </p>
                        <ImQuotesRight className="review-icon icon-right" />
                    </div>
                    <div className="review review3">
                        <ImQuotesLeft className="review-icon icon-left" />
                        <p className="review-content">
                            Claire is amazing with hair. She created the most
                            amazing colour for me. Honestly would recommend
                            Claire to anyone looking for any kind of cut or
                            colour x
                        </p>
                        <ImQuotesRight className="review-icon icon-right" />
                    </div>
                </div>
            </section>
        </main>
    );
};

export default HomePage;
