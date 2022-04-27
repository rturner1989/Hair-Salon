import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import useIntersectionObserver from "../../Hooks/useIntersectionObserver";

const ReturnToTop = () => {
    const [intersectionRef, isVisible] = useIntersectionObserver(
        null,
        null,
        true
    );

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className="top-of-page-container"
            ref={intersectionRef}
            onClick={goToTop}
        >
            <button
                className={`${
                    isVisible ? "top-of-page hidden" : "top-of-page"
                }`}
            >
                <span className="visually-hidden">Return to top of page</span>
                <AiOutlineArrowUp className="top-of-page-svg" />
            </button>
        </div>
    );
};

export default ReturnToTop;
