import React from 'react';

const Six = ({dicevalue, roleDice}) => {
    return (
        <div className="six"
        onClick={roleDice}
        >
            <div className="six-upper">
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="six-middle">
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
            <div className="six-lower">
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default Six;
