import React from "react";
import { useState, useEffect } from "react";

const Flip = ({ delay }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
    }, []);

    return (
        <div
            className={
                scrollPosition < delay ? "flip-card flip-active" : "flip-card"
            }
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">Front</div>
                <div className="flip-card-back">Back</div>
            </div>
        </div>
    );
};

export default Flip;
