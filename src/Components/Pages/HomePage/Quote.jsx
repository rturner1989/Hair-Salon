import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = ({ quote, index }) => {
    return (
        <div className={`review review${index + 1}`}>
            <div className="review-icon icon-left">
                <span className="visually-hidden">Left speech quotation</span>
                <ImQuotesLeft />
            </div>
            <p className="review-content">{quote.review}</p>
            <div className="review-icon icon-right">
                <span className="visually-hidden">Right speed quotation</span>
                <ImQuotesRight />
            </div>
        </div>
    );
};

export default Quote;
