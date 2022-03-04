import React, { useState } from "react";
import {
    optionColour,
    optionGents,
    optionHairUp,
    optionLadies,
} from "../../../Data/Data";
import { selectionType } from "../../../Library/types";
import ServiceOption from "./ServiceOption";
import { makeID } from "../../../Library/Helpers";

const Services = () => {
    const [selectedService, setSelectedService] = useState(
        selectionType.LADIES
    );

    const serviceSelection = () => {
        switch (selectedService) {
            case selectionType.LADIES:
                return (
                    <div className="options-container">
                        {optionLadies.map((option) => {
                            return (
                                <ServiceOption key={makeID()} option={option} />
                            );
                        })}
                    </div>
                );
            case selectionType.COLOURS:
                return (
                    <div className="options-container">
                        {optionColour.map((option) => {
                            return (
                                <ServiceOption key={makeID()} option={option} />
                            );
                        })}
                    </div>
                );
            case selectionType.GENTS:
                return (
                    <div
                        className={
                            optionGents.length < 4
                                ? "options-container short"
                                : "options-container"
                        }
                    >
                        {optionGents.map((option) => {
                            return (
                                <ServiceOption key={makeID()} option={option} />
                            );
                        })}
                    </div>
                );
            case selectionType.HAIRUPDO:
                return (
                    <div
                        className={
                            optionHairUp.length < 4
                                ? "options-container short"
                                : "options-container"
                        }
                    >
                        {optionHairUp.map((option) => {
                            return (
                                <ServiceOption key={makeID()} option={option} />
                            );
                        })}
                    </div>
                );
        }
    };

    return (
        <main className="services-container">
            <section className="service-header">
                <img
                    style={{ maxWidth: "50%" }}
                    src="./Images/about-header.jpg"
                    alt=""
                />
                <div className="service-header-blurb">
                    <p>Cut or Colour, Long or Short, Thick or Thin.</p>
                    <p>
                        Services for men and women with any hair type and style.
                    </p>
                    <p>
                        A quality service that will last through your busy
                        lifestyle.
                    </p>
                </div>
                <div className="cover-opacity"></div>
            </section>
            <section className="service-options-container">
                <h1>My Services</h1>
                <div className="service-options">
                    <div className="options-container">
                        <h2>Ladies</h2>
                        <div>
                            {optionLadies.map((option) => {
                                return (
                                    <ServiceOption
                                        key={makeID()}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="options-container">
                        <h2>Colours</h2>
                        <div>
                            {optionColour.map((option) => {
                                return (
                                    <ServiceOption
                                        key={makeID()}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="options-container">
                        <h2>Gents</h2>
                        <div>
                            {optionGents.map((option) => {
                                return (
                                    <ServiceOption
                                        key={makeID()}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="options-container">
                        <h2>Hair Up</h2>
                        <div>
                            {optionHairUp.map((option) => {
                                return (
                                    <ServiceOption
                                        key={makeID()}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>
            <section className="cancellation">
                <h3>If you need to cancel your appointment...</h3>
                <div>
                    <p>
                        I know life doesnt always go to plan and things come up.
                    </p>
                    <p>
                        If you cant make an appointment please contact me ASAP.
                    </p>
                </div>
                <div>
                    <p>
                        Less than 24 hours notice will result in a 50% charge of
                        the service you were booked in for.
                    </p>
                    <p>
                        A no show for the appointment will be a 100% charge of
                        the service.
                    </p>
                </div>
                <div>
                    <p>
                        Repeat offenders of no shows will not be welcome to book
                        any future appointments.
                    </p>
                    <p>To cancel, please contact me directly.</p>
                </div>
            </section>
        </main>
    );
};

export default Services;
