import React from 'react'
import './login.css';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div>
      <div className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='loginPage'>
            <div className='text-center'>
                <Link className='logo'>Logo</Link>
            </div>
            <div className="form-group mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <Link className='mt-3' to='/forgotPassword' >Forgot Password</Link>
            <Link to='/admin' className='btn login-btn'>Login</Link>
        </div>
      </div>
    </div>
  )
}

export default Login;