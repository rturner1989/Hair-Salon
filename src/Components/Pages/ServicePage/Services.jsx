import React, { useState } from "react";

import ServiceHeader from "./ServiceHeader";
import ServiceSection from "./ServiceSection";

const Services = () => {
    return (
        <main className="services-container">
            <ServiceHeader />
            <ServiceSection />
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
