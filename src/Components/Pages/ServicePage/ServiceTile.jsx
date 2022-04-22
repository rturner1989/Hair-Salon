import { useState } from "react";
import { makeID } from "../../../Library/Helpers";
import ServiceOption from "./ServiceOption";

const ServiceTile = ({ tile }) => {
    const { title, img, reverse, options } = tile;

    return (
        <div className={`service-tile ${reverse}`}>
            <div className="options-container">
                <h2>{title}</h2>
                <div className="service-option-container">
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
