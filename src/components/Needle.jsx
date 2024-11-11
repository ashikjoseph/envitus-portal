import React, { useRef } from 'react';
import './styles/needle.css';

function Needle({ aqi }) {
    const previousAngleRef = useRef(270); // Start at 270 degrees
    let angle = previousAngleRef.current; // Default to the last known angle


    if (aqi >= 0 && aqi <= 50) {
        angle = 270 + ((aqi / 50) * 30) + 18;
    } else if (aqi > 50 && aqi <= 100) {
        angle = 300 + ((aqi - 50) / 50 * 30) + 3;
    } else if (aqi > 100 && aqi <= 200) {
        angle = 330 + ((aqi - 100) / 100 * 30);
    } else if (aqi > 200 && aqi <= 300) {
        angle = ((aqi - 200) / 100 * 30) - 14;
    } else if (aqi > 300 && aqi <= 400) {
        angle = 30 + ((aqi - 300) / 100 * 30) - 19;
    } else if (aqi > 400 && aqi <= 500) {
        angle = 60 + ((aqi - 400) / 100 * 30) - 20;
    }

    // Ensure the needle does not exceed a 180-degree turn

    const angleDiff = angle - previousAngleRef.current;

    if (Math.abs(angleDiff) > 180) {

        // Adjust the angle to ensure it turns less than 180 degrees

        if (angleDiff > 0) {
            angle -= 360; // Turn counter-clockwise

        } else {
            angle += 360; // Turn clockwise
        }
    }


    previousAngleRef.current = angle;





    return (
        <div className="needle" style={{ transform: `rotate(${angle}deg)` }}>
            <div className="needle-base">
                <div className="inner-circle"></div>
            </div>

            <svg className="needle-svg" viewBox="0 0 60 80">
                <path
                    d="M 30 0 Q 26 31, 7 70 Q 30 51, 53 70 Q 34 31, 30 0"
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
