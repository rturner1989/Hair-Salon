import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <main className="contact-container">
            <section className="map-container">
                <iframe
                    id="iframe"
                    style={{ border: 0 }}
                    loading="lazy"
                    src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBa_ef0dKcEgR2UZygGx7Cdo&zoom=17&key=${process.env.REACT_APP_MAP_KEY}`}
                ></iframe>{" "}
            </section>
            <section className="contact-head">
                <div>
                    <h3>Contact</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione veniam tempora, in provident corporis culpa
                        porro enim explicabo vero possimus?
                    </p>
                </div>
            </section>
            <section className="contact-details">
                <div className="contact-tile contact-phone-email">
                    <h3>Phone: </h3>
                    <p className="contact-number">07801 899 240</p>
                    <h3>E-Mail: </h3>
                    <p className="contact-email">claireholden.ch85@gmail.com</p>
                </div>
                <div className="contact-tile contact-hours">
                    <h3>Opening Hours</h3>
                    <p>Monday: Closed</p>
                    <p>Tuesday: Closed</p>
                    <p>Wednesday: 9am - 5pm</p>
                    <p>Thursday: 9am until late</p>
                    <p>Friday: 9am - 4.30pm</p>
                    <p>Saturday: 9am - 4pm</p>
                    <p>Sunday: Closed</p>
                </div>
                <div className="contact-tile contact-address">
                    <h3>LV Hair</h3>
                    <p>3 Bridge Street </p>
                    <p>Hereford, HR4 0DF</p>
                </div>
            </section>
            <ContactForm />
        </main>
    );
};

export default Contact;
