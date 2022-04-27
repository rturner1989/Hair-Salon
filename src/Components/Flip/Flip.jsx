import useIntersectionObserver from "../../Hooks/useIntersectionObserver";
import TextTileMobile from "../Pages/HomePage/TextTileMobile";

const Flip = ({ tile, index }) => {
    const options = {
        root: null,
        rootMargin: "1000% 0% -50% 0%",
        threshold: 0,
    };

    const [flipRef, isVisible] = useIntersectionObserver(null, options, true);

    return (
        <div
            className={`flip-card tile${index + 1} ${
                isVisible && "flip-active"
            }`}
            ref={flipRef}
        >
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img
                        style={{ maxWidth: "100%", objectFit: "contain" }}
                        src={tile.flipImage}
                        alt=""
                    />
                </div>
                <div className={`flip-card-back card-back${index + 1}`}>
                    <TextTileMobile key={index} tile={tile} index={index} />
                </div>
            </div>
        </div>
    );
};

export default Flip;
