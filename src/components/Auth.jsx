import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import authImage from '../Assets/icon-removebg-preview.png';
import Swal from 'sweetalert2';
import '../components/styles/auth.css';

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    Swal.fire({
      title: 'Wow',
      text: 'Logged in successfully',
      icon: 'success'
    });
    navigate('/dashboard');
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(to bottom right, green, yellow)' }}>
      <div className="card auth-card" style={{ width: '100%', maxWidth: '700px', minHeight: '700px', padding: '30px', marginTop: '120px', marginBottom: '120px', backgroundColor: 'white', paddingRight:"120px" }}>
        <div className="p-4">

          <div className="mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img src={authImage} alt="Authentication Icon" className="img-fluid" />
            <h2 className="mt-3" style={{color:"black"}}>Log in</h2>
            <p style={{color:"black"}}>
              By logging into this platform, you confirm that you accept and agree to abide by our Terms and Conditions and Privacy Policy.
            </p>
          </div>

          <div className="d-flex row" style={{ padding: '12px' }}>
            <Button variant="dark" className="justify-content-center col " style={{ width: '100%', padding: '10px', borderRadius: '15px', marginBottom: '10px', marginRight: '10px' }}>
              <label htmlFor="" style={{ fontSize: '19px' }}>Demo user: demouser1</label>
            </Button>
            <Button variant="dark" className="justify-content-center col" style={{ width: '100%', padding: '10px', borderRadius: '15px', marginBottom: '10px' }}>
              <label htmlFor="" style={{ fontSize: '19px' }}>Password: D@mo!24#</label>
            </Button>
          </div>

          <Form>
            <Form.Group controlId="email" className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" defaultValue="demouser1"
                 style={{backgroundColor:"lightgray"}} />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3 position-relative" >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                defaultValue="D@mo!24#"
                style={{backgroundColor:"lightgray"}}
              />
              <i
                className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
                onClick={togglePasswordVisibility}
                style={{ position: 'absolute', top: '50%', right: '10px', cursor: 'pointer', color:"black", display:"flex", marginTop:"8px"}}
                aria-label="Toggle password visibility"
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="dark" className="rounded" style={{ width: '100%', padding: '10px' }} onClick={handleLogin}>
                Login
              </Button>
            </div>
            <div className="mt-3">
              <Link to="#" style={{ textAlign: 'left', display: 'block', textDecoration: 'none', fontSize: '20px', marginTop: '40px' }}>
                Terms
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Auth;
