import React from 'react';
import './styles/needle.css';

function Needle({ value }) {

    let angle = 0;

    if (value >= 0 && value <= 50) {
        angle = 270 + ((value - 1) / 49) * 30;
    } else if (value >= 51 && value <= 100) {
        angle = 300 + ((value - 51) / 49) * 30;
    } else if (value >= 101 && value <= 200) {
        angle = 330 + ((value - 101) / 100) * 30;
    } else if (value >= 201 && value <= 300) {
        angle = ((value - 201) / 99) * 30;
    } else if (value >= 301 && value <= 400) {
        angle = 30 + ((value - 301) / 99) * 30;
    } else if (value >= 401 && value <= 500) {
        angle = 60 + ((value - 401) / 99) * 30;
    }

    angle += 7;


    return (
        <div className="needle" style={{ transform: `rotate(${angle}deg)` }}>
            <div className="needle-base">
                <div className="inner-circle"></div>
            </div>
            
            <svg className="needle-svg" viewBox="0 0 60 80">
                <path
                    d="M 30 0 Q 25 30, 5 70 Q 30 50, 55 70 Q 35 30, 30 0"
                    fill="#cccccc"
                />
            </svg>

            <div className="top-circle"></div>
            <div className="end-circle"></div>
            <div className="endtop-circle"></div>
            <div className="middle-back-circle"></div>
            <div className="middle-circle"></div>
            <div className="endbottom-circle"></div>
        </div>
    );
}

export default Needle;
