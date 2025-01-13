import React from 'react'
import './sendotp.css';
import { Link } from 'react-router-dom';

function Sendotp() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='loginPage otpPage'>
            <h4>Forgot Password</h4>
            <p>Please enter the O.T.P received on registered email.</p>
            <div className='d-flex align-items-center justify-content-center'>
                <input type='number' min='0' max='9' />
                <input type='number' min='0' max='9' />
                <input type='number' min='0' max='9' />
                <input type='number' min='0' max='9' />
            </div>
            <span>Resend OTP</span>
        <Link to='/updatePassword' className='btn login-btn'>Continue</Link>
        </div>
        
    </div>
  )
}


export default Sendotp;