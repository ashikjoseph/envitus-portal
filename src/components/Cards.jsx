import React from 'react';
import '../components/styles/cards.css'; // Ensure this path is correct
import { Col, Row } from 'react-bootstrap';
import Guage from './Guage';

function Cards() {
    const value = 120;

    return (
        <Row className="mt-3">
            <Col xs={12} md={4}>
                <div className="map-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.5025789887854!2d76.34368877036674!3d10.05784235007311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080d8f2d0a890d%3A0x80789db2a04f3848!2sKINFRA!5e0!3m2!1sen!2sin!4v1728278254819!5m2!1sen!2sin"
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
                                <label className="card-label">Device ID <span>: ESLNT001</span></label>
                            </div>
                            <div>
                                <label className="card-label">Status <span>: Online</span></label>
                            </div>
                            <div>
                                <label className="card-label">Latitude <span>: 13.067439</span></label>
                            </div>
                            <div>
                                <label className="card-label">Longitude <span>: 80.237617</span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </Col>

            <Col xs={12} md={4} style={{ marginTop: '20px' }}>
            <Guage value={value}/>
            </Col>
        </Row>
    );
}

export default Cards;
