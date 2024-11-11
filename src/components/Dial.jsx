import React from 'react';
import "../components/styles/dial.css";
import Needle from './Needle';

function Dial({ aqi, highestPollutantName }) {
    const label = aqi <= 50 ? "Good" :
        aqi <= 100 ? "Satisfactory" :
            aqi <= 200 ? "Moderate" :
                aqi <= 300 ? "Poor" :
                    aqi <= 400 ? "Very Poor" : "Severe";



    const labelColor = aqi <= 50 ? "#239023" :
        aqi <= 100 ? "#73e600" :
            aqi <= 200 ? "#ffcc00" :
                aqi <= 300 ? "#ff9900" :
                    aqi <= 400 ? "#ff1a1a" : "#e60000";


  
    return (
        <>
            <div className="dial">
                <div className="inner-offset"></div>
                <div className="gauge-label">
                    {aqi}
                </div>
                <div>
                    <Needle aqi={aqi} />
                </div>
            </div>
            <div className='details'>
                <div style={{ width: "100%", marginTop: "-18px" }}>
                    <label htmlFor="" className='d-flex justify-content-center' style={{ color: labelColor, fontSize: "33px" }}>
                        Quality - {label}
                    </label>
                    <label htmlFor="" className='d-flex justify-content-center' style={{ color: "white", fontSize: "24px" }}>
                        Prominent Pollutant:   {highestPollutantName}
                    </label>
                </div>
            </div>
        </>
    );
}

export default Dial;
