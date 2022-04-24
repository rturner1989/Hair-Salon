import React from "react";
import { contactNumber } from "../../../Data/Data";
import Address from "../../Address";
import OpeningHours from "./OpeningHours";

const ContactDetails = () => {
    return (
        <div className="contact-details">
            <OpeningHours />
            <div className="contact-tile contact-address">
                <h3>Location</h3>
                <Address />
            </div>
            <div className="contact-tile contact-phone">
                <h3>Phone</h3>
                <p className="contact-number">{contactNumber}</p>
            </div>
        </div>
    );
};

export default ContactDetails;
