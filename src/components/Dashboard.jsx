import React from 'react';
import '../components/styles/dashboard.css';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Cards from './Cards';
import Categories from './Categories';

function Dashboard() {
  return (
    <div className="dashboard-container">
      <Row>
        <Col xs={12} md={3} lg={2}>  
          <Sidebar />
        </Col>
        <Col xs={12} md={9} lg={10}>  
          <div className="p-3">
            <Header />
          </div>
          <Row className="mt-4 justify-content-center justify-content-md-start">
            <Cards />
          </Row>
          <Row className="mt-4 justify-content-center justify-content-md-start">
            <Categories />
          </Row>
          <Row style={{marginTop:"95px"}}>
          <div className="bg-black mt-3" style={{ height: '45px', width: '100%'}} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
