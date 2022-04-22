import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { makeID } from "../../../Library/Helpers";
import ServiceOption from "./ServiceOption";

const ServiceTileMobile = ({ tile, index }) => {
    const { title, img, options } = tile;
    const [windowDimensions] = useWindowDimensions();

    return (
        <div className={`service-tile-mobile service-tile${index + 1}`}>
            <div className="options-container-mobile">
                <h2>{title}</h2>
                <div className="service-option-container-mobile">
                    {options.map((option) => {
                        return <ServiceOption key={makeID()} option={option} />;
                    })}
                </div>
            </div>
            {windowDimensions.width > 555 && (
                <div className="options-img-container-mobile">
                    <img className="service-tile-img-mobile" src={img} />
                </div>
            )}
        </div>
    );
};

export default ServiceTileMobile;
