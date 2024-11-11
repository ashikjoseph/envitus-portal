import React from 'react';
import authImage from '../Assets/icon-removebg-preview.png';
import '../components/styles/sidebar.css';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar" style={{ padding: "5px" }}>
      <img src={authImage} alt="Sidebar Icon" className="sidebar-icon" />
      <ul className="sidebar-links">
        <li className="sidebar-link green-link">Home</li>
        <li className="sidebar-link">Ambient Conditions</li>
        <li className="sidebar-link">CO₂ & Dust</li>
        <li className="sidebar-link">Other Pollutants</li>
        <li className="sidebar-link">Manage Users</li>
        <li className="sidebar-link">Manage Devices</li>
        <li className="sidebar-link">API & Keys</li>
        <li className="sidebar-link">Alarms</li>
        <li className="sidebar-link">Remote Diagnostics</li>
        <Link to="/" style={{ textDecoration: "none" }}><li className="sidebar-link">Log Out</li></Link>
      </ul>
    </div>
  );
}

export default Sidebar;
