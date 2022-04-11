import React, { useState } from "react";
import { services } from "../../../Data/Data";
import { selectionType } from "../../../Library/types";
import { Link } from "react-router-dom";
import serviceHero from "./../../../Images/woman-washing-head-hairsalon.webp";
import ServiceTile from "./ServiceTile";

const Services = () => {
    const [selectedService, setSelectedService] = useState(
        selectionType.LADIES
    );

    // const serviceSelection = () => {
    //     switch (selectedService) {
    //         case selectionType.LADIES:
    //             return (
    //                 <div className="options-container">
    //                     {optionLadies.map((option) => {
    //                         return (
    //                             <ServiceOption key={makeID()} option={option} />
    //                         );
    //                     })}
    //                 </div>
    //             );
    //         case selectionType.COLOURS:
    //             return (
    //                 <div className="options-container">
    //                     {optionColour.map((option) => {
    //                         return (
    //                             <ServiceOption key={makeID()} option={option} />
    //                         );
    //                     })}
    //                 </div>
    //             );
    //         case selectionType.GENTS:
    //             return (
    //                 <div
    //                     className={
    //                         optionGents.length < 4
    //                             ? "options-container short"
    //                             : "options-container"
    //                     }
    //                 >
    //                     {optionGents.map((option) => {
    //                         return (
    //                             <ServiceOption key={makeID()} option={option} />
    //                         );
    //                     })}
    //                 </div>
    //             );
    //         case selectionType.HAIRUPDO:
    //             return (
    //                 <div
    //                     className={
    //                         optionHairUp.length < 4
    //                             ? "options-container short"
    //                             : "options-container"
    //                     }
    //                 >
    //                     {optionHairUp.map((option) => {
    //                         return (
    //                             <ServiceOption key={makeID()} option={option} />
    //                         );
    //                     })}
    //                 </div>
    //             );
    //     }
    // };

    return (
        <main className="services-container">
            <section className="service-header">
                <img className="service-header-img" src={serviceHero} alt="" />
                <div className="service-header-blurb">
                    <p className="blurb-line1">
                        Cut or Colour, Long or Short, Thick or Thin.
                    </p>
                    <p className="blurb-line2">
                        Services for men and women with any hair type and style.
                    </p>
                    <p className="blurb-line3">
                        <i>
                            A quality service that will last through your busy
                            lifestyle.
                        </i>
                    </p>
                    <Link to="/contact">
                        <button className="bookingBtn">Enquire Now</button>
                    </Link>
                </div>
            </section>
            <section className="service-options-container">
                <h1>Services</h1>
                <div className="service-options">
                    {services.map((service) => {
                        return (
                            <ServiceTile key={service.title} tile={service} />
                        );
                    })}
                    <div className="service-overlay"></div>
                </div>
            </section>
            <section>
                <p>&#42; Price includes cut &#38; finish (Excludes toner)</p>
                <p>&#42; Additional £10.00 for long/thick hair</p>
            </section>
            <section className="about-service-container">
                <h3>About my Services</h3>
                <p>
                    <b>Lorem, ipsum dolor sit</b>
                    amet consectetur adipisicing elit. Doloribus sint ratione
                    rerum voluptatum praesentium, temporibus repellat aliquid.
                    Rerum, aliquid fugit? Perspiciatis pariatur magnam quam,
                    nisi sint id itaque nostrum dicta reprehenderit
                    voluptatibus, nesciunt sit perferendis beatae qui corrupti
                    repellendus illum quos ut mollitia. Itaque cupiditate qui
                    ullam, impedit ad sequi?
                </p>
                <p>
                    <b>Lorem, ipsum dolor sit</b>
                    amet consectetur adipisicing elit. Doloribus sint ratione
                    rerum voluptatum praesentium, temporibus repellat aliquid.
                    Rerum, aliquid fugit? Perspiciatis pariatur magnam quam,
                    nisi sint id itaque nostrum dicta reprehenderit
                    voluptatibus, nesciunt sit perferendis beatae qui corrupti
                    repellendus illum quos ut mollitia. Itaque cupiditate qui
                    ullam, impedit ad sequi?
                </p>
                <p>
                    <b>Lorem, ipsum dolor sit</b>
                    amet consectetur adipisicing elit. Doloribus sint ratione
                    rerum voluptatum praesentium, temporibus repellat aliquid.
                    Rerum, aliquid fugit? Perspiciatis pariatur magnam quam,
                    nisi sint id itaque nostrum dicta reprehenderit
                    voluptatibus, nesciunt sit perferendis beatae qui corrupti
                    repellendus illum quos ut mollitia. Itaque cupiditate qui
                    ullam, impedit ad sequi?
                </p>
            </section>
            <section className="cancellation-container">
                <div className="cancellation">
                    <h2>If You Need To Cancel Your Appointment</h2>
                    <div>
                        <h3>Cancelling An Appointment</h3>
                        <p>
                            I know life doesnt always go to plan and things come
                            up, therefore, in consideration of my other clients,
                        </p>
                        <p>
                            if you cant make an appointment please contact me
                            ASAP.
                        </p>
                    </div>
                    <div>
                        <h3>Deposits</h3>
                        <p>
                            Less than 24 hours notice will result in a 50%
                            non-refundable charge of the service you were booked
                            in for.
                        </p>
                        <p>
                            A no show for the appointment will be a 100%
                            non-refundable charge of the service.
                        </p>
                    </div>
                    <div>
                        <h3>Future Appointments</h3>
                        <p>
                            Repeat offenders of no shows will not be welcome to
                            book any future appointments.
                        </p>
                        <p>To cancel, please contact me directly.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Services;
