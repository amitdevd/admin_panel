import React from 'react'
import { Link } from 'react-router-dom';

function Updatepassword() {
  return (
    <div className='vh-100 d-flex align-items-center justify-content-center'>
        <div className='loginPage'>
            <h4>Update Password</h4>
            <p>Please enter the O.T.P received on registered email.</p>
            <div className="form-group">
                <label for="exampleFormControlInput1" className="form-label">New Password</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="New Password" />
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Confirm Password" />
            </div>
            <Link to='/' className='btn login-btn'>Save</Link>
        </div>
    </div>
  );
}

export default Updatepassword;