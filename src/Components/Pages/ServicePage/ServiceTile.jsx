import useWindowDimensions from "../../../Hooks/useWindowDimensions";
import { makeID } from "../../../Library/Helpers";
import ServiceOption from "./ServiceOption";

const ServiceTile = ({ tile, index }) => {
    const { title, img, reverse, options } = tile;

    const [windowDimensions] = useWindowDimensions();

    if (windowDimensions.width < 1145) {
        return (
            <div className={`service-options-border service-tile${index + 1}`}>
                <div className={`service-tile ${reverse}`}>
                    <div className="options-container">
                        <h2>{title}</h2>
                        <div className="service-option-container">
                            {options.map((option) => {
                                return (
                                    <ServiceOption
                                        key={makeID()}
                                        option={option}
                                    />
                                );
                            })}
                        </div>
                    </div>
                    <div className="options-img-container">
                        <img className="service-tile-img" src={img} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={`service-tile ${reverse}`}>
            <div className="options-container">
                <h2>{title}</h2>
                <div className="service-option-container">
                    {options.map((option) => {
                        return <ServiceOption key={makeID()} option={option} />;
                    })}
                </div>
            </div>
            <div className="options-img-container">
                <img className="service-tile-img" src={img} />
            </div>
        </div>
    );
};

export default ServiceTile;
