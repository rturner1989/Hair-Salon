import React from "react";
import { reviewQuote } from "../../../Data/Data";
import Quote from "./Quote";

const ReviewSection = () => {
    return (
        <section className="review-section">
            <h3 className="review-heading">
                This is what my clients have said...
            </h3>
            <div className="reviews-container">
                {reviewQuote.map((review, index) => {
                    return <Quote key={index} quote={review} index={index} />;
                })}
            </div>
        </section>
    );
};

export default ReviewSection;
