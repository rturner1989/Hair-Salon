import { AiOutlineArrowUp } from "react-icons/ai";

const ReturnToTop = () => {
    return (
        <div className="top-of-page">
            <span className="visually-hidden">Return to top of page</span>
            <AiOutlineArrowUp className="top-of-page-svg" />
        </div>
    );
};

export default ReturnToTop;
