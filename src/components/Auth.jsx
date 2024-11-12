import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import authImage from '../Assets/icon-removebg-preview.png';
import Swal from 'sweetalert2';
import '../components/styles/auth.css';
import { loginApi } from '../services/allAPI';

function Auth() {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({ username: 'demouser1', password: 'D@mo!24#' });
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { username, password } = userData;

    // Check if fields are filled
    if (!username || !password) {
      Swal.fire({
        icon: 'warning',
        title: 'Incomplete Form',
        text: 'Please fill in both fields.',
        confirmButtonColor: '#3085d6',
      });
      return;
    }

    const result = await loginApi(userData);
    
    if (result.status === 200) {
      console.log("===token details===")
      console.log(result)
      sessionStorage.setItem("token", result.data.data.token);

      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'User logged in successfully',
        confirmButtonColor: '#3085d6',
      });

      setUserData({ username: "", password: "" });
      navigate('/dashboard');
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: result.data.message || 'Login failed!',
        confirmButtonColor: '#d33',
      });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ width: '100%', minHeight: '100vh', background: 'linear-gradient(to bottom right, green, yellow)' }}>
      <div className="card auth-card" style={{ width: '100%', maxWidth: '700px', minHeight: '750px', padding: '30px', marginTop: '120px', marginBottom: '120px', backgroundColor: 'white', paddingRight:"120px" }}>
        <div className="p-4">

          <div className="mb-4" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <img src={authImage} alt="Authentication Icon" className="img-fluid" />
            <h2 className="mt-3" style={{color:"black"}}>Log in</h2>
            <p style={{color:"#666666", fontSize:"14px", fontWeight: 500}}>
              By logging into this platform, you confirm that you accept and agree to abide by our Terms and Conditions and Privacy Policy.
            </p>
          </div>

          <div className="d-flex row" style={{ padding: '12px' }}>
            <Button variant="dark" className="justify-content-center col " style={{ width: '100%', padding: '8px', borderRadius: '15px', marginBottom: '10px', marginRight: '10px' }}>
              <label htmlFor="" style={{ fontSize: '19px', fontWeight:500 }}>Demo user: demouser1</label>
            </Button>
            <Button variant="dark" className="justify-content-center col" style={{ width: '100%', padding: '8px', borderRadius: '15px', marginBottom: '10px' }}>
              <label htmlFor="" style={{ fontSize: '19px', fontWeight:500 }}>Password: D@mo!24#</label>
            </Button>
          </div>

          <Form>
            <Form.Group controlId="username" className="mb-3">
              <Form.Label style={{color:"#666666"}}>Username</Form.Label>
              <Form.Control type="text" defaultValue="demouser1"
                 style={{backgroundColor:"#f2f2f2", height:"55px", fontSize:"20px", padding: '10px'}} />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3 position-relative" >
              <Form.Label style={{color:"#666666"}}>Password</Form.Label>
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                defaultValue="D@mo!24#"
                style={{backgroundColor:"#f2f2f2", height:"55px", fontSize:"20px", padding: '10px'}}
              />
              <i
                className={showPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
                onClick={togglePasswordVisibility}
                style={{ position: 'absolute', top: '50%', right: '10px', cursor: 'pointer', color:"black", display:"flex", marginTop:"8px"}}
                aria-label="Toggle password visibility"
              />
            </Form.Group>
            <div className="text-center mt-4">
              <Button variant="dark" className="rounded" style={{ width: '100%', padding: '5px',height:"50px", fontSize:"24px", fontWeight:500 }} onClick={handleLogin}>
                Log in
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
