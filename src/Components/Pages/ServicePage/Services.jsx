import React, { useState } from "react";
import {
    optionColour,
    optionGents,
    optionHairUp,
    optionLadies,
} from "../../../Data/Data";
import { selectionType } from "../../../Library/types";
import ServiceOption from "./ServiceOption";
import { makeID } from "./../../../Library/Helpers";

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
            <h1>My Services</h1>
            <form action="#" className="options-list">
                <div
                    className={
                        selectedService === selectionType.LADIES
                            ? "service-option active"
                            : "service-option"
                    }
                >
                    <input
                        className="service-option-input"
                        type="radio"
                        id="ladies"
                        name="input"
                        value={selectionType.LADIES}
                        onChange={(e) => {
                            setSelectedService(e.target.value);
                        }}
                        checked={selectedService === "ladies"}
                    />
                    <label htmlFor="ladies">Ladies</label>
                </div>
                <div
                    className={
                        selectedService === selectionType.COLOURS
                            ? "service-option active"
                            : "service-option"
                    }
                >
                    <input
                        className="service-option-input"
                        type="radio"
                        id="colours"
                        name="input"
                        value={selectionType.COLOURS}
                        onChange={(e) => {
                            setSelectedService(e.target.value);
                        }}
                        checked={selectedService === "colours"}
                    />
                    <label htmlFor="colours">Colours</label>
                </div>
                <div
                    className={
                        selectedService === selectionType.GENTS
                            ? "service-option active"
                            : "service-option"
                    }
                >
                    <input
                        className="service-option-input"
                        type="radio"
                        id="gents"
                        name="input"
                        value={selectionType.GENTS}
                        onChange={(e) => {
                            setSelectedService(e.target.value);
                        }}
                        checked={selectedService === "gents"}
                    />
                    <label htmlFor="gents">Gents &#38; Children</label>
                </div>
                <div
                    className={
                        selectedService === selectionType.HAIRUPDO
                            ? "service-option active"
                            : "service-option"
                    }
                >
                    <input
                        className="service-option-input"
                        type="radio"
                        id="hair-up-dos"
                        name="input"
                        value={selectionType.HAIRUPDO}
                        onChange={(e) => {
                            setSelectedService(e.target.value);
                        }}
                        checked={selectedService === "hair-up-dos"}
                    />
                    <label htmlFor="hair-up-dos">Hair Up Do's</label>
                </div>
            </form>
            {serviceSelection()}
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
