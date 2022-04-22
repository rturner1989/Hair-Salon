import React from "react";
import ServiceTile from "./ServiceTile";
import { services } from "../../../Data/Data";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import ServiceTileMobile from "./ServiceTileMobile";

const ServiceSection = () => {
    const [windowDimensions] = useWindowDimensions();

    return (
        <section className="service-options-container">
            <h1>Services</h1>
            {windowDimensions.width <= 985 ? (
                <div className="service-options-mobile">
                    {services.map((service, index) => {
                        return (
                            <ServiceTileMobile
                                key={service.title}
                                tile={service}
                                index={index}
                            />
                        );
                    })}
                </div>
            ) : (
                <div className="service-options">
                    {services.map((service) => {
                        return (
                            <ServiceTile key={service.title} tile={service} />
                        );
                    })}
                    <div className="service-overlay"></div>
                </div>
            )}
            <div>
                <p>&#42; Price includes cut &#38; finish (Excludes toner)</p>
                <p>&#42; Additional £10.00 for long/thick hair</p>
            </div>
        </section>
    );
};

export default ServiceSection;
