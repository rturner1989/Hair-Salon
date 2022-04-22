import React from "react";
import ServiceTile from "./ServiceTile";
import { services } from "../../../Data/Data";

const ServiceSection = () => {
    return (
        <section className="service-options-container">
            <h1>Services</h1>
            <div className="service-options">
                {services.map((service) => {
                    return <ServiceTile key={service.title} tile={service} />;
                })}
                <div className="service-overlay"></div>
            </div>
            <div>
                <p>&#42; Price includes cut &#38; finish (Excludes toner)</p>
                <p>&#42; Additional £10.00 for long/thick hair</p>
            </div>
        </section>
    );
};

export default ServiceSection;
