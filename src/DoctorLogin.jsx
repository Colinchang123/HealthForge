import React, { useState, useEffect, useRef } from 'react';
import './style.css'; // Adjust the path as necessary
import backgroundImage from './images/images.jpg'; // Ensure the correct path
import { useNavigate } from 'react-router-dom';

const DoctorLogin = () => {
  const [doctorId, setDoctorId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Declare useNavigate outside of handleSubmit
  const wrongTimesRef = useRef(0);
  const canAuth = useRef(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateLogin(doctorId, password) && canAuth.current == true) {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('loggedInUser', doctorId); // Store the logged-in user's ID
      
      // Navigate to FaceRecognition page
      navigate('/FaceRecognition', { state: { doctorId } });
    } 
    else if (canAuth.current == true){
      wrongTimesRef.current ++
    
      if (wrongTimesRef.current < 3){
        alert('Invalid Doctor ID or Password');
      }
      else if (wrongTimesRef.current == 3){
        alert('Invalid Doctor ID or Password, if authentication fails again, account will be locked for 30 seconds ');
      }
      else if (wrongTimesRef.current >= 4){
        alert('Invalid Doctor ID or Password, account will now be locked for 30 seconds ');
        canAuth.current = false

        const delay = setTimeout(() => {
          canAuth.current = true
        }, 10000); 
      }
    }
  };

  const validateLogin = (doctorId, password) => {
    const doctors = [
      { id: 'Colin', password: 'Chang' },
      { id: 'doc2', password: 'password2' },
      { id: 'doc3', password: 'password3' },
      { id: 'doc4', password: 'password4' },
      { id: 'Reshav', password: 'Menon' }
    ];

    return doctors.some(doctor => doctor.id === doctorId && doctor.password === password);
  };

  return (
    <div style={styles.body}>
      <div className="login-container">
        <h2>Health Forge</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="doctorId">Doctor ID</label>
          <input
            type="text"
            id="doctorId"
            name="doctorId"
            value={doctorId}
            onChange={(e) => setDoctorId(e.target.value)}
            required
          />
          
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  body: {
    fontFamily: 'Arial, sans-serif',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
  },
  button: {
    margin: '10px 100px', // Adjust vertical margin
    padding: '10px 100px', // Adjust padding
    fontSize: '1rem', // Adjust font size
    backgroundColor: 'green', // Button background color
    color: 'lightgrey', // Button text color
    border: 'none', // Remove border
    cursor: 'pointer', // Pointer cursor on hover
    borderRadius: '7px', // Rounded corners
    fontFamily: 'Calibri',
    display: 'flex', // Use flexbox
    justifyContent: 'center', // Center text horizontally
    alignItems: 'center', // Center text vertically
    height: '50px' // Specify button height
  }
};

export default DoctorLogin;
