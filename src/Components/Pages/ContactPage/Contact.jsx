import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <main className="contact-container">
            <section className="contact-information-container">
                <div className="contact-head">
                    <h3>Contact</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione veniam tempora, in provident corporis culpa
                        porro enim explicabo vero possimus?
                    </p>
                </div>
                <div className="contact-details">
                    <div className="contact-tile contact-hours">
                        <h3>Opening Hours</h3>
                        <div>
                            <p>
                                <span>Monday:</span> <span>Closed</span>
                            </p>
                            <p>
                                <span>Tuesday:</span> <span>Closed</span>
                            </p>
                            <p>
                                <span>Wednesday:</span> <span>9am - 5pm</span>
                            </p>
                            <p>
                                <span>Thursday:</span>
                                <span>9am until late</span>
                            </p>
                            <p>
                                <span>Friday:</span> <span>9am - 4.30pm</span>
                            </p>
                            <p>
                                <span>Saturday:</span> <span>9am - 4pm</span>
                            </p>
                            <p>
                                <span>Sunday:</span> <span>Closed</span>
                            </p>
                        </div>
                    </div>
                    <div className="contact-tile contact-address">
                        <h3>Location</h3>
                        <div>
                            <p>LV Hair</p>
                            <p>3 Bridge Street </p>
                            <p>Hereford, HR4 0DF</p>
                        </div>
                    </div>
                    <div className="contact-tile contact-phone">
                        <h3>Phone</h3>
                        <p className="contact-number">07801 899 240</p>
                    </div>
                </div>
                <div className="map-container">
                    <iframe
                        id="iframe"
                        style={{ border: 0 }}
                        loading="lazy"
                        src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJBa_ef0dKcEgR2UZygGx7Cdo&zoom=17&key=${process.env.REACT_APP_MAP_KEY}`}
                    ></iframe>
                </div>
            </section>
            <section className="form-section">
                <h2>Send me a message</h2>
                <ContactForm />
            </section>
        </main>
    );
};

export default Contact;
