import React from "react";
import { openingHours } from "../../../Data/Data";

const OpeningHours = () => {
    return (
        <div className="contact-tile contact-hours">
            <h3>Opening Hours</h3>
            <div>
                {openingHours.map((day) => {
                    return (
                        <p key={day.weekDay}>
                            <span>{day.weekDay}:</span> <span>{day.hours}</span>
                        </p>
                    );
                })}
            </div>
        </div>
    );
};

export default OpeningHours;
