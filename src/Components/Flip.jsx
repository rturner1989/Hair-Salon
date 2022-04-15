import React from "react";
import { useState, useEffect } from "react";

const Flip = () => {
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
                scrollPosition < 400 ? "flip-card flip-active" : "flip-card"
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
