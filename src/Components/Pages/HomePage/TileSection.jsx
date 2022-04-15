import React from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import TextTile from "./TextTile";
import TextTileMobile from "./TextTileMobile";
import { homeTiles } from "../../../Data/Data";

const TileSection = () => {
    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width <= 985) {
        return (
            <section className="tile-section-mobile">
                <div className="tile-container-mobile">
                    {homeTiles.map((tile, index) => {
                        return (
                            <TextTileMobile
                                key={index}
                                tile={tile}
                                index={index}
                            />
                        );
                    })}
                </div>
            </section>
        );
    }

    return (
        <section className="tile-section">
            <div className="tile-container">
                {homeTiles.map((tile, index) => {
                    return <TextTile key={index} tile={tile} index={index} />;
                })}
            </div>
            <div className="home-overlay"></div>
        </section>
    );
};

export default TileSection;
