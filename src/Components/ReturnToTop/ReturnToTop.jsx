import { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);

    const goToTop = () => {
        document.body.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div className="top-of-page" onClick={goToTop}>
            <span className="visually-hidden">Return to top of page</span>
            <AiOutlineArrowUp className="top-of-page-svg" />
        </div>
    );
};

export default ReturnToTop;
