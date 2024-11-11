import React from 'react';
import '../components/styles/cards.css';
import { Col, Row } from 'react-bootstrap';
import Dial from './Dial';

function Cards({aqi, highestPollutantName, deviceList}) {
    const device = deviceList && deviceList.length > 0 ? deviceList[0] : null;


    const latitude = device ? device.latitude : null;
    const longitude = device ? device.longitude : null;

    
    const dashboardMapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5025789887854!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8f2d0a890d%3A0x80789db2a04f3848!2sKINFRA!5e0!3m2!1sen!2sin!4v1728278254819!5m2!1sen!2sin`;

    
  
    return (
        <Row className="mt-3">
            <Col xs={12} md={4}>
                <div className="map-container">
                    <iframe
                        src={dashboardMapUrl}
                        width="100%"
                        height="300"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </Col>

            <Col xs={12} md={4}>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">Device Information</h3>
                        <div className="device-info">
                            <div>
                                <label className="card-label">Device ID <span>: {device ? device.deviceId : "N/A"}</span></label>
                            </div>
                            <div>
                                <label className="card-label">Status <span>: {device ? "Online" : "Offline"}</span></label>
                            </div>
                            <div>
                                <label className="card-label">Latitude <span>: {device ? device.latitude : "N/A"}</span></label>
                            </div>
                            <div>
                                <label className="card-label">Longitude <span>: {device ? device.longitude : "N/A"}</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={4} style={{ marginTop: '20px' }}>
                <Dial aqi={aqi} highestPollutantName={highestPollutantName}  />
            </Col>
        </Row>
    );
}

export default Cards;
