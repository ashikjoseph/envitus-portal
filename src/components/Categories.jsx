import React from 'react';
import "../components/styles/categories.css"; 
import { Col, Row } from 'react-bootstrap';

function Categories() {
  return (
    <>
      <Row style={{ marginTop: "50px" }}>
        <Col xs={12}>
          <h3 style={{ color: "white", textAlign: "center", fontWeight: "bold" }}>AQI Categories</h3>
        </Col>
      </Row>
      <Row style={{ marginTop: "10px", padding: "15px", height: "240px" }} className='d-flex justify-content-start'>
        {[ 
          { label: 'Good', range: '(0-50)', color: '#239023' },
          { label: 'Satisfactory', range: '(51-100)', color: '#73e600' },
          { label: 'Moderate', range: '(101-200)', color: '#ffcc00' },
          { label: 'Poor', range: '(201-300)', color: '#ff9900' },
          { label: 'Very Poor', range: '(301-400)', color: '#ff1a1a' },
          { label: 'Severe', range: '(401-500)', color: '#e60000' },
        ].map((category, index) => (
          <Col xs={6} sm={4} md={2} key={index}>
            <div className="aqi-category" style={{ backgroundColor: category.color }}>
              <label>{category.label}<br />{category.range}</label>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Categories;
