import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = ({ position }) => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div
            className={position > 100 ? "top-of-page" : "top-of-page hidden"}
            onClick={goToTop}
        >
            <span className="visually-hidden">Return to top of page</span>
            <AiOutlineArrowUp className="top-of-page-svg" />
        </div>
    );
};

export default ReturnToTop;
