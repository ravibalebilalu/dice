import React from 'react';

const Five = ({dicevalue, roleDice}) => {
    return (
        <div className="five"
        onClick={roleDice}
        >
            <div className="five-upper">
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="five-middle">
                <div className="dot"></div>
            </div>
            <div className="five-lower">
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Five;
