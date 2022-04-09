import { useState } from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const TextTile = ({ tile, index }) => {
    const { title, blurb, img, imgAlt, innerText, reverse } = tile;
    const [windowDimensions] = useWindowDimensions();
    const [isTileHover, setIsTileHover] = useState(false);

    const toggleHover = () => {
        setIsTileHover(!isTileHover);
    };

    return (
        <div
            className={
                windowDimensions.width < 985
                    ? `tile ${reverse} tile${index + 1}`
                    : `tile ${reverse}`
            }
        >
            <div className="tile-text">
                <h4>{title}</h4>
                <p>{blurb}</p>
            </div>
            <div
                className="tile-img-container"
                onMouseEnter={toggleHover}
                onMouseLeave={() => setIsTileHover(false)}
            >
                <img className="tile-img" src={img} alt={imgAlt} />
                <div
                    className={isTileHover ? "tile-hover active" : "tile-hover"}
                >
                    <p>{innerText}</p>
                </div>
            </div>
        </div>
    );
};

export default TextTile;
