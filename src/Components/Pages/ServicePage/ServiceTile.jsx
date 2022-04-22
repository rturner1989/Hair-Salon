import { useState } from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { makeID } from "../../../Library/Helpers";
import ServiceOption from "./ServiceOption";

const ServiceTile = ({ tile }) => {
    const { title, img, reverse, options } = tile;
    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width <= 985) {
        return (
            <div className="tile">
                <div className="options-container-mobile">
                    <h2>{title}</h2>
                    <div>
                        {options.map((option) => {
                            return (
                                <ServiceOption key={makeID()} option={option} />
                            );
                        })}
                    </div>
                </div>
                <div className="options-img-container-mobile">
                    <img
                        className="service-tile-img-mobile"
                        src={img}
                        style={{ maxWidth: "100px" }}
                    />
                </div>
            </div>
        );
    }

    return (
        <div
            className={
                windowDimensions.width > 1200 ? `tile ${reverse}` : `tile`
            }
        >
            <div className="options-container">
                <h2>{title}</h2>
                <div>
                    {options.map((option) => {
                        return <ServiceOption key={makeID()} option={option} />;
                    })}
                </div>
            </div>
            <div className="options-img-container">
                <img className="service-tile-img" src={img} />
            </div>
        </div>
    );
};

export default ServiceTile;
