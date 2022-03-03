import React from "react";

const ServiceOption = ({ option }) => {
    return (
        <div className="option">
            <h3 className="option-title">{option.name}</h3>
            <p className="option-price">{option.price}</p>
        </div>
    );
};

export default ServiceOption;
