import React from "react";
import { cancellation } from "../../../Data/Data";

const ServiceTC = () => {
    return (
        <section className="about-service-container">
            <h3>About my Services</h3>
            {cancellation.map((policy) => {
                return <p>{policy}</p>;
            })}
        </section>
    );
};

export default ServiceTC;
