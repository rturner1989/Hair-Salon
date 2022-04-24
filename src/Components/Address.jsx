import React from "react";

const Address = ({ compName = null, bold = false }) => {
    return (
        <div className={compName}>
            {bold ? <p style={{ fontWeight: 600 }}>LV Hair</p> : <p>LV Hair</p>}
            <p>3 Bridge Street </p>
            <p>Hereford, HR4 0DF</p>
        </div>
    );
};

export default Address;
