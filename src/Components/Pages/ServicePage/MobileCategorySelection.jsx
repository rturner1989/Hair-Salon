import { useState } from "react";
import { services } from "../../../Data/Data";
import { selectionType } from "../../../Library/types";
import ServiceOption from "./ServiceOption";

const MobileCategorySelection = () => {
    const [selectedService, setSelectedService] = useState(
        selectionType.LADIES
    );

    const serviceSelection = () => {
        switch (selectedService) {
            case selectionType.LADIES:
                return (
                    <div className="options-container-mobile">
                        {services[0].options.map((option) => {
                            return (
                                <ServiceOption
                                    key={option.name}
                                    option={option}
                                />
                            );
                        })}
                    </div>
                );
            case selectionType.COLOURS:
                return (
                    <div className="options-container-mobile">
                        {services[1].options.map((option) => {
                            return (
                                <ServiceOption
                                    key={option.name}
                                    option={option}
                                />
                            );
                        })}
                    </div>
                );
            case selectionType.GENTS:
                return (
                    <div className="options-container-mobile">
                        {services[2].options.map((option) => {
                            return (
                                <ServiceOption
                                    key={option.name}
                                    option={option}
                                />
                            );
                        })}
                    </div>
                );
            case selectionType.HAIRUPDO:
                return (
                    <div className="options-container-mobile">
                        {services[3].options.map((option) => {
                            return (
                                <ServiceOption
                                    key={option.name}
                                    option={option}
                                />
                            );
                        })}
                    </div>
                );
        }
    };

    return (
        <section className="service-options-container-mobile">
            <div className="form-container">
                <form action="#" className="options-list">
                    <div
                        className={
                            selectedService === selectionType.LADIES
                                ? "service-option option-active"
                                : "service-option"
                        }
                    >
                        <input
                            className="service-option-input"
                            type="radio"
                            id="ladies"
                            name="input"
                            value={selectionType.LADIES}
                            onChange={(e) => {
                                setSelectedService(e.target.value);
                            }}
                            checked={selectedService === "ladies"}
                        />
                        <label htmlFor="ladies">Ladies</label>
                    </div>
                    <div
                        className={
                            selectedService === selectionType.COLOURS
                                ? "service-option option-active"
                                : "service-option"
                        }
                    >
                        <input
                            className="service-option-input"
                            type="radio"
                            id="colours"
                            name="input"
                            value={selectionType.COLOURS}
                            onChange={(e) => {
                                setSelectedService(e.target.value);
                            }}
                            checked={selectedService === "colours"}
                        />
                        <label htmlFor="colours">Colours</label>
                    </div>
                    <div
                        className={
                            selectedService === selectionType.GENTS
                                ? "service-option option-active"
                                : "service-option"
                        }
                    >
                        <input
                            className="service-option-input"
                            type="radio"
                            id="gents"
                            name="input"
                            value={selectionType.GENTS}
                            onChange={(e) => {
                                setSelectedService(e.target.value);
                            }}
                            checked={selectedService === "gents"}
                        />
                        <label htmlFor="gents">Gents &#38; Children</label>
                    </div>
                    <div
                        className={
                            selectedService === selectionType.HAIRUPDO
                                ? "service-option option-active"
                                : "service-option"
                        }
                    >
                        <input
                            className="service-option-input"
                            type="radio"
                            id="hair-up-dos"
                            name="input"
                            value={selectionType.HAIRUPDO}
                            onChange={(e) => {
                                setSelectedService(e.target.value);
                            }}
                            checked={selectedService === "hair-up-dos"}
                        />
                        <label htmlFor="hair-up-dos">Hair Up Do's</label>
                    </div>
                </form>
                {serviceSelection()}
            </div>
        </section>
    );
};

export default MobileCategorySelection;
