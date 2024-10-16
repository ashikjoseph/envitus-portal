import React from 'react';
import "../components/styles/guage.css";

function Guage({ value }) {
    const angleOffset = 10;
    const angle = (value * (180 / 500)) - 90 + angleOffset;

    const label = value <= 50 ? "Good" :
        value <= 100 ? "Satisfactory" :
            value <= 200 ? "Moderate" :
                value <= 300 ? "Poor" :
                    value <= 400 ? "Very Poor" : "Severe";

    return (
        <div className="guage">
            <div className="gauge-needle" style={{ transform: `translate(-50%, 26px) rotate(${angle}deg)` }} />
            <div className="arc-circle" />
            <div className="arc-circle-right" />
            <div className="gauge-circle" />
            <div className="large-circle" />
            <label htmlFor="" style={{
                color: "white",
                position: "absolute",
                left: "50%",
                bottom: "45%",
                transform: "translateX(-50%)",
                fontSize: "25px",
                zIndex: 3,
                padding: "2px 5px",
                borderRadius: "5px",
                fontWeight: "bold"
            }}>
                {value}
            </label>

            <div className="guage-levels">
                <span className="guage-level guage-slice-1"></span>
                <span className="guage-level guage-slice-2"></span>
                <span className="guage-level guage-slice-3"></span>
                <span className="guage-level guage-slice-4"></span>
                <span className="guage-level guage-slice-5"></span>
                <span className="guage-level guage-slice-6"></span>
            </div>

            <div style={{ marginTop: "60px", width: "100%" }}>
                <label htmlFor="" className='d-flex justify-content-center' style={{ color: "yellow", fontSize: "25px" }}>
                    Quality - {label}
                </label>
                <label htmlFor="" className='d-flex justify-content-center' style={{ color: "white", fontSize: "20px" }}>
                    Prominent Pollutant: CO
                </label>
            </div>
        </div>
    );
}

export default Guage;
