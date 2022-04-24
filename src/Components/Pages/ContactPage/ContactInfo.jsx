import React from "react";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import ContactDetails from "./ContactDetails";
import ContactDetailsMobile from "./ContactDetailsMobile";

const ContactInfo = () => {
    const mapURL = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBa_ef0dKcEgR2UZygGx7Cdo&zoom=17&key=${process.env.REACT_APP_MAP_KEY}`;

    const [windowDimensions] = useWindowDimensions();

    const whichContactDetails = () => {
        if (windowDimensions.width < 430) {
            return <ContactDetailsMobile />;
        }
        return <ContactDetails />;
    };

    return (
        <section className="contact-info-section">
            <div className="contact-information-container">
                <div className="contact-head">
                    <h3>Contact</h3>
                </div>
                <div className="contact-information">
                    {whichContactDetails()}
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
