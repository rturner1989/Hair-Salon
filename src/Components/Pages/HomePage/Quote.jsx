import React from "react";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

const Quote = ({ quote }) => {
    return (
        <div className="review review2">
            <ImQuotesLeft className="review-icon icon-left" />
            <p className="review-content">{quote.review}</p>
            <ImQuotesRight className="review-icon icon-right" />
        </div>
    );
};

export default Quote;
