import React from 'react';
import { Row, Col } from 'react-bootstrap';
import '../components/styles/header.css';

function Header() {
    return (
        <>
            <Row className="topbar d-flex justify-content-center align-items-center">
                <Col className="date-time text-center me-4" md={3} sm={6}>
                    <div className="date">3 July 2024</div>
                    <div className="time">14:02:02</div>
                </Col>
                <Col className="title-with-arrow" md={6} sm={12}>
                    <a href="" style={{ textDecoration: "none" }}>
                        <span className="down-arrow">&#9660;</span>
                    </a>
                    <span className="title">Selected Device Location Details</span>
                </Col>
            </Row>
        </>
    );
}

export default Header;
