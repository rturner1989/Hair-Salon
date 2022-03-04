import React from "react";

const ServiceOption = ({ option }) => {
    return (
        <div className="option">
            <h4 className="option-title">{option.name}</h4>
            <p className="option-price">{option.price}</p>
        </div>
    );
};

export default ServiceOption;
