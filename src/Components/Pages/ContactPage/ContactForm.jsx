import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        phone: "",
        email: "",
        message: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                process.env.REACT_APP_EMAIL_SERVICEID,
                process.env.REACT_APP_EMAIL_TEMPLATEID,
                formData,
                process.env.REACT_APP_EMAIL_USERID
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        setFormData({
            from_name: "",
            phone: "",
            email: "",
            message: "",
        });
    };

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <form className="contact-form" onSubmit={(e) => onSubmit(e)}>
            <section>
                <label className="contact-name contract-entry" htmlFor="">
                    <input
                        name="from_name"
                        type="text"
                        value={formData.from_name}
                        placeholder="Name"
                        required
                        onChange={onChange}
                    />
                </label>
                <label className="contact-phone contract-entry" htmlFor="">
                    <input
                        name="phone"
                        value={formData.phone}
                        type="tel"
                        placeholder="Telephone"
                        required
                        onChange={onChange}
                    />
                </label>
                <label className="contact-email contract-entry" htmlFor="">
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        placeholder="E-Mail"
                        required
                        onChange={onChange}
                    />
                </label>
                <label className="contact-message contract-entry" htmlFor="">
                    <textarea
                        value={formData.message}
                        name="message"
                        placeholder="Message"
                        required
                        onChange={onChange}
                    ></textarea>
                </label>
            </section>
            <button className="submit-btn">Submit</button>
        </form>
    );
};

export default ContactForm;
