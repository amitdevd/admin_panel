import React from 'react'
import { Link } from 'react-router-dom';

function Forgotpassword() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
      <div className='forgotPass loginPage'>
        <h4>Forgot Password</h4>
        <div className="form-group">
            <label for="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <Link to='/sendOtp' className='btn login-btn'>Send OTP</Link>
      </div>
    </div>
  )
}

export default Forgotpassword;
