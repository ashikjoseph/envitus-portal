import React from 'react';
import "../components/styles/dial.css";
import Needle from './Needle';

function Dial({ value }) {
    const label = value <= 50 ? "Good" :
    value <= 100 ? "Satisfactory" :
        value <= 200 ? "Moderate" :
            value <= 300 ? "Poor" :
                value <= 400 ? "Very Poor" : "Severe";
    return (
        <>
        <div className="dial">
            <div className="inner-offset"></div>
            <div className="gauge-label">
                {value}
            </div>
            <div>
                <Needle value={value} />
            </div>
        </div>
        <div className='details'>
        <div style={{width: "100%", marginTop:"-18px" }}>
                <label htmlFor="" className='d-flex justify-content-center' style={{ color: "yellow", fontSize: "34px" }}>
                    Quality - {label}
                </label>
                <label htmlFor="" className='d-flex justify-content-center' style={{ color: "white", fontSize: "25px" }}>
                    Prominent Pollutant:   CO
                </label>
            </div>
        </div>
        </>
    );
}

export default Dial;
