import React from "react";

const Address = ({ compName = null }) => {
    return (
        <div className={compName}>
            <h3>LV Hair</h3>
            <p>3 Bridge Street </p>
            <p>Hereford, HR4 0DF</p>
        </div>
    );
};

export default Address;
