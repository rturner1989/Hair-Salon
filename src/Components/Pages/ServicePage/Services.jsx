import ServiceCancellation from "./ServiceCancellation";
import ServiceHeader from "./ServiceHeader";
import ServiceSection from "./ServiceSection";
import ServiceTC from "./ServiceTC";
import MobileCategorySelection from "./MobileCategorySelection";

const Services = () => {
    return (
        <main className="services-container">
            <ServiceHeader />
            <ServiceSection />
            <ServiceTC />
            <ServiceCancellation />
            <MobileCategorySelection />
        </main>
    );
};

export default Services;
