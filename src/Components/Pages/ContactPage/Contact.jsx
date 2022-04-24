import React from "react";
import ContactFormContainer from "./ContactFormContainer";
import ContactInfo from "./ContactInfo";

const Contact = () => {
    return (
        <main className="contact-container">
            <ContactInfo />
            <ContactFormContainer />
        </main>
    );
};

export default Contact;
