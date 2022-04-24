import React from "react";
import { cancellationPolicy } from "../../../Data/Data";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const ServiceCancellation = () => {
    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width < 555) {
        return (
            <section className="cancellation-container">
                <div className="cancellation-mobile-border">
                    <div className="cancellation">
                        <h2>If You Need To Cancel Your Appointment</h2>
                        {cancellationPolicy.map((cancel) => {
                            const { title, policy } = cancel;
                            return (
                                <div key={title}>
                                    <h3>{title}</h3>
                                    {policy.map((para) => {
                                        return (
                                            <p key={para.slice(0, 9)}>{para}</p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="cancellation-container">
            <div className="cancellation">
                <h2>If You Need To Cancel Your Appointment</h2>
                {cancellationPolicy.map((cancel) => {
                    const { title, policy } = cancel;
                    return (
                        <div key={title}>
                            <h3>{title}</h3>
                            {policy.map((para) => {
                                return <p key={para.slice(0, 9)}>{para}</p>;
                            })}
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ServiceCancellation;
