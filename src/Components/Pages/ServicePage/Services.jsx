import ServiceCancellation from "./ServiceCancellation";
import ServiceHeader from "./ServiceHeader";
import ServiceSection from "./ServiceSection";
import ServiceTC from "./ServiceTC";
import MobileCategorySelection from "./MobileCategorySelection";
import useWindowDimensions from "../../../Hooks/useWindowDimensions";

const Services = () => {
    const [windowDimensions] = useWindowDimensions();

    const serviceSelect = () => {
        if (windowDimensions.width < 570) {
            return <MobileCategorySelection />;
        }
        return <ServiceSection />;
    };

    return (
        <main className="services-container">
            <ServiceHeader />
            {serviceSelect()}
            <ServiceTC />
            <ServiceCancellation />
        </main>
    );
};

export default Services;
