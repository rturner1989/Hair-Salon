import React from "react";
import { contactNumber } from "../../../Data/Data";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import Address from "../../Address";
import OpeningHours from "./OpeningHours";

const ContactInfo = () => {
    const mapURL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBa_ef0dKcEgR2UZygGx7Cdo&zoom=17&key=${process.env.REACT_APP_MAP_KEY}`;

    const [windowDimensions] = useWindowDimensions();

    const contactTileConditional = () => {
        if (windowDimensions.width > 430) {
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
        }
        return (
            <div className="contact-details">
                <OpeningHours />
                <div className="contact-tile-mobile-container">
                    <div className="contact-tile contact-address">
                        <h3>Location</h3>
                        <Address />
                    </div>
                    <div className="contact-tile contact-phone">
                        <h3>Phone</h3>
                        <p className="contact-number">{contactNumber}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <section className="contact-info-section">
            <div className="contact-information-container">
                <div className="contact-head">
                    <h3>Contact</h3>
                </div>
                <div className="contact-information">
                    {contactTileConditional()}
                    <div className="map-container">
                        <iframe
                            id="iframe"
                            style={{ border: 0 }}
                            loading="lazy"
                            src={mapURL}
                        ></iframe>
                    </div>
                </div>
            </div>
            <div className="contact-info-overlay"></div>
        </section>
    );
};

export default ContactInfo;
