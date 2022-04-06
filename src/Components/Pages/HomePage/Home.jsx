import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { homeTiles, reviewQuote } from "../../../Data/Data";
import Quote from "./Quote";
import TextTile from "./TextTile";
import headerImg from "./../../../Images/BEAUTI~1 copy.webp";
import ReturnToTop from "../../ReturnToTop/ReturnToTop";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const HomePage = () => {
    const [showScroll, setShowScroll] = useState(false);
    const [windowDimensions] = useWindowDimensions();

    const homeScroll = useRef();

    return (
        <main
            className="homePage"
            onScroll={() => {
                if (windowDimensions.width > 926) {
                    if (homeScroll.current.scrollTop <= 0) {
                        setShowScroll(false);
                    } else {
                        setShowScroll(true);
                    }
                }
            }}
        >
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
                <img className="home-header-img" src={headerImg} alt="" />
            </header>
            <section className="tile-section">
                <div className="tile-container">
                    {homeTiles.map((tile, index) => {
                        return <TextTile key={index} tile={tile} />;
                    })}
                </div>
            </section>
            <section className="review-section">
                <h3 className="review-heading">
                    This is what my clients have said...
                </h3>
                <div className="reviews-container">
                    {reviewQuote.map((review, index) => {
                        return <Quote key={index} quote={review} />;
                    })}
                </div>
            </section>
            <ReturnToTop />
        </main>
    );
};

export default HomePage;
