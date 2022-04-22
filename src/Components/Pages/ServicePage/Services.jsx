import ServiceCancellation from "./ServiceCancellation";
import ServiceHeader from "./ServiceHeader";
import ServiceSection from "./ServiceSection";
import ServiceTC from "./ServiceTC";

const Services = () => {
    return (
        <main className="services-container">
            <ServiceHeader />
            <ServiceSection />
            <ServiceTC />
            <ServiceCancellation />
        </main>
    );
};

export default Services;
