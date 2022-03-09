import React from "react";

const Contact = () => {
    return (
        <main className="contact-container">
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
            <form className="contact-form" action="">
                <section>
                    <label className="contact-name contract-entry" htmlFor="">
                        <input type="text" placeholder="Name" />
                    </label>
                    <label className="contact-email contract-entry" htmlFor="">
                        <input type="email" placeholder="E-Mail" />
                    </label>
                    <label className="contact-phone contract-entry" htmlFor="">
                        <input type="tel" placeholder="Telephone" />
                    </label>
                    <label
                        className="contact-message contract-entry"
                        htmlFor=""
                    >
                        <textarea name="" placeholder="Message"></textarea>
                    </label>
                </section>
                <button>Submit</button>
            </form>
            <section>map</section>
        </main>
    );
};

export default Contact;
