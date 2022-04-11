import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        from_name: "",
        phone: "",
        email: "",
        message: "",
    });
    const [isSubmit, setIsSubmit] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        emailjs
            .send(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                formData,
                process.env.REACT_APP_USER_ID
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
        setIsSubmit(true);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsSubmit(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [isSubmit]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const telValidation = (e) => {
        if (!/[0-9]/.test(e.key)) {
            e.preventDefault();
        }
        return;
    };

    return (
        <form className="contact-form" onSubmit={(e) => onSubmit(e)}>
            {isSubmit && <h3 className="form-submit-msg">Form Submitted</h3>}
            <section>
                <label className="contact-name contact-entry" htmlFor="">
                    <input
                        name="from_name"
                        type="text"
                        value={formData.from_name}
                        placeholder="Name"
                        required
                        onChange={onChange}
                    />
                </label>
                <label className="contact-phone contact-entry" htmlFor="">
                    <input
                        name="phone"
                        value={formData.phone}
                        type="tel"
                        inputMode="tel"
                        placeholder="Telephone"
                        maxLength={11}
                        required
                        onChange={onChange}
                        onKeyPress={telValidation}
                    />
                </label>
                <label className="contact-email contact-entry" htmlFor="">
                    <input
                        name="email"
                        type="email"
                        value={formData.email}
                        placeholder="E-Mail"
                        required
                        onChange={onChange}
                    />
                </label>
                <label className="contact-message contact-entry" htmlFor="">
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
