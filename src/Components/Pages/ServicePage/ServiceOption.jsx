import React from "react";

const ServiceOption = ({ option }) => {
    return (
        <div className="option">
            <h3 className="option-title">{option.name}</h3>
            <h4 className="option-price">{option.price}</h4>
        </div>
    );
};

export default ServiceOption;
