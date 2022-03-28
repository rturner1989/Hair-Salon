import React from "react";
import { Link } from "react-router-dom";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const HomePage = () => {
    return (
        <div className="homePage">
            <section className="home-header">
                <div className="home-header-blurb-container">
                    <div className="home-header-blurb">
                        <h3>Welcome</h3>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Eligendi reprehenderit placeat vitae est ea
                            similique.
                        </p>
                        <p>
                            <i>
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Quaerat, deleniti.
                            </i>
                        </p>
                        <Link to="/contact">
                            <button className="bookingBtn">Enquire Now</button>
                        </Link>
                    </div>
                </div>
                <img
                    className="home-header-img"
                    src="./Images/BEAUTI~1 copy.jpg"
                    alt=""
                />
            </section>
            <section className="tile-section">
                <div className="tile-container">
                    <div className="tile tile-text">
                        <h4>Quality Service</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam adipisci accusantium laboriosam molestiae
                            impedit. Iure neque voluptas fugit voluptates quas.
                        </p>
                    </div>
                    <img
                        className="tile"
                        src="./Images/composition-with-hair-extension-accessories-dark-background.jpg"
                        alt=""
                    />
                    <div className="tile tile-text">
                        <h4>Any Type of Hair</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam adipisci accusantium laboriosam molestiae
                            impedit. Iure neque voluptas fugit voluptates quas.
                        </p>
                    </div>
                    <img
                        className="tile"
                        src="./Images/close-up-portrait-curly-redhead-woman-with-blue-eyes.jpg"
                        alt=""
                    />
                    <img
                        className="tile"
                        src="./Images/beauty-portrait-mystery-smiling-ginger-woman-with-long-hair-posing-sideways-looking.jpg"
                        alt=""
                    />
                    <div className="tile tile-text">
                        <h4>Great Prices</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam adipisci accusantium laboriosam molestiae
                            impedit. Iure neque voluptas fugit voluptates quas.
                        </p>
                    </div>
                    <img
                        className="tile"
                        src="./Images/woman-mixing-hair-dye-bowl.jpg"
                        alt=""
                    />
                    <div className="tile tile-text">
                        <h4>The Best Tools for the Job</h4>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nam adipisci accusantium laboriosam molestiae
                            impedit. Iure neque voluptas fugit voluptates quas.
                        </p>
                    </div>
                </div>
            </section>
            <section className="review-section">
                <h3 className="review-heading">
                    This is what my clients have said...
                </h3>
                <div className="reviews-container">
                    <div className="review">
                        <ImQuotesLeft className="review-icon icon-left" />
                        <p className="review-content">
                            Had my hair done by Claire for colour correction (by
                            a different salon) Claire did an amazing job and I
                            can’t wait for my next appointment, super talented
                            and an excellent hairdresser 😍
                        </p>
                        <ImQuotesRight className="review-icon icon-right" />
                    </div>
                    <div className="review">
                        <ImQuotesLeft className="review-icon icon-left" />
                        <p className="review-content">
                            Was lucky enough to win a competition for a hair
                            treatment with cut and blow dry. Lovely products
                            used and really pleased with the result. Would def
                            recommend Claire. thank you again x
                        </p>
                        <ImQuotesRight className="review-icon icon-right" />
                    </div>
                    <div className="review">
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
        </div>
    );
};

export default HomePage;
