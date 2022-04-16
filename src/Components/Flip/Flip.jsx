import { useEffect, useRef } from "react";
import TextTileMobile from "../Pages/HomePage/TextTileMobile";

const Flip = ({ tile, index }) => {
    const flipRef = useRef();

    const handleVisibleButton = () => {
        const position = window.pageYOffset;
        if (position > 100) {
            flipRef.current.classList.add("flip-active");
        } else {
            flipRef.current.classList.remove("flip-active");
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleVisibleButton);
        return () => {
            window.removeEventListener("scroll", handleVisibleButton);
        };
    }, []);

    console.log("rerender");

    return (
        <div className={`flip-card tile${index + 1}`} ref={flipRef}>
            <div className="flip-card-inner">
                <div className="flip-card-front">Front</div>
                <div className={`flip-card-back card-back${index + 1}`}>
                    <TextTileMobile key={index} tile={tile} index={index} />
                </div>
            </div>
        </div>
    );
};

export default Flip;
