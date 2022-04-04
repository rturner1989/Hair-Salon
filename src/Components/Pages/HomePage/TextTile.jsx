import { useState } from "react";

const TextTile = ({ tile }) => {
    const { title, blurb, img, imgAlt, innerText, reverse } = tile;

    const [isTileHover, setIsTileHover] = useState(false);

    const toggleHover = () => {
        setIsTileHover(!isTileHover);
    };

    return (
        <div className={`tile ${reverse}`}>
            <div className="tile-text">
                <h4>{title}</h4>
                <p>{blurb}</p>
            </div>
            <div
                className="tile-img-container"
                onMouseEnter={toggleHover}
                onMouseLeave={() => setIsTileHover(false)}
            >
                <img
                    className="tile-img"
                    src={process.env.PUBLIC_URL + img}
                    alt={imgAlt}
                />
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
