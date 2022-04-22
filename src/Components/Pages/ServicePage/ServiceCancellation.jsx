import React from "react";

const ServiceCancellation = () => {
    return (
        <section className="cancellation-container">
            <div className="cancellation">
                <h2>If You Need To Cancel Your Appointment</h2>
                <div>
                    <h3>Cancelling An Appointment</h3>
                    <p>
                        I know life doesnt always go to plan and things come up,
                        therefore, in consideration of my other clients,
                    </p>
                    <p>
                        if you cant make an appointment please contact me ASAP.
                    </p>
                </div>
                <div>
                    <h3>Deposits</h3>
                    <p>
                        Less than 24 hours notice will result in a 50%
                        non-refundable charge of the service you were booked in
                        for.
                    </p>
                    <p>
                        A no show for the appointment will be a 100%
                        non-refundable charge of the service.
                    </p>
                </div>
                <div>
                    <h3>Future Appointments</h3>
                    <p>
                        Repeat offenders of no shows will not be welcome to book
                        any future appointments.
                    </p>
                    <p>To cancel, please contact me directly.</p>
                </div>
            </div>
        </section>
    );
};

export default ServiceCancellation;
