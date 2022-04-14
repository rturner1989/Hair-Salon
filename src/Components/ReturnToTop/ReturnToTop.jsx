import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = ({ offset }) => {
    const [scrollPosition, setScrollPosition] = useState();

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);

    return (
        <div
            className={
                scrollPosition > offset ? "top-of-page" : "top-of-page hidden"
            }
            onClick={goToTop}
        >
            <span className="visually-hidden">Return to top of page</span>
            <AiOutlineArrowUp className="top-of-page-svg" />
        </div>
    );
};

export default ReturnToTop;
