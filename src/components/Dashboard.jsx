import React, { useEffect, useState } from 'react';
import '../components/styles/dashboard.css';
import { Col, Row } from 'react-bootstrap';
import Header from './Header';
import Sidebar from './Sidebar';
import Cards from './Cards';
import Categories from './Categories';
import { deviceApi, getSensorDataApi } from '../services/allAPI';

function Dashboard() {
  const [deviceList, setDeviceList] = useState([]);
  const [sensorData, setSensorData] = useState(null);
  const [aqi, setAqi] = useState(null)

  const [highestPollutantName, setHighestPollutantName] = useState('');

  const getDevice = async () => {
    if (sessionStorage.getItem('token')) {
      const token = sessionStorage.getItem('token');
      const reqHeader = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      };
      try {
        const result = await deviceApi(reqHeader);
        console.log('==result for all devices==');
        console.log(result);
        setDeviceList(result.data.data.devices);
      } catch (error) {
        console.error('Error fetching devices:', error);
      }
    }
  };


  const sensorDetails = async () => {
    if (deviceList?.length > 0) {
      try {
        const response = await getSensorDataApi(deviceList[0].deviceId);
        console.log("==res==")
        console.log(response)
        setSensorData(response.data);

        const aqiValue = response.data.data?.liveDataPerDeviceId?.[0]?.dataList?.[0]?.data?.AQI;
        const prominentPollutant = response.data.data?.liveDataPerDeviceId?.[0]?.dataList?.[0]?.data?.prominentPollutant;

        console.log("AQI Value:", aqiValue);
        console.log("Prominent Pollutant:", prominentPollutant, "Value:", response.data.data?.liveDataPerDeviceId?.[0]?.dataList?.[0]?.data[prominentPollutant]);

        setAqi(aqiValue)
        setHighestPollutantName(prominentPollutant);


      } catch (error) {
        console.error('Error fetching sensor data:', error);
      }
    }
  };

  useEffect(() => {
    getDevice();
  }, []);

  useEffect(() => {
    if (deviceList?.length > 0) {
      sensorDetails();

      const intervalId = setInterval(() => {
        sensorDetails();
      }, 3000);
      return () => clearInterval(intervalId); // Cleanup the interval on component unmount
    }
  }, [deviceList]);


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
            <Cards aqi={aqi} highestPollutantName={highestPollutantName} deviceList={deviceList} />
          </Row>
          <Row className="mt-4 justify-content-center justify-content-md-start">
            <Categories aqi={aqi} />
          </Row>
          <Row style={{ marginTop: "95px" }}>
            <div className="bg-black mt-3" style={{ height: '45px', width: '100%' }} />
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
