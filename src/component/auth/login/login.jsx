import React, { useContext, useState } from 'react'
import './login.css';
import { Link } from 'react-router-dom';
import { UserContext } from '../../admin/layout/layout';
import { Image } from '../../../img-consts/img-const';


function Login() {

  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const {setUser} = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    setUser({userName, password})
  }

  return (
    <div>
      <div className='login_other_page vh-100 d-flex align-items-center justify-content-center'>
        <div className='page_divider'></div>
        <div className='loginPage'>
            <div className='text-center'>
                <Link className='logo'>
                  <img src={Image.Logo_URL} alt='logo' width={200} height={56} />
                </Link>
            </div>
            <div className="form-group mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} 
                id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group mb-3">
                <label for="exampleFormControlInput1" className="form-label">Password</label>
                <input type="email" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} 
                 id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <Link className='mt-3 fs-4 text-black' to='/forgotPassword' >Forgot Password</Link>
            <Link to='/admin' className='btn login-btn'>Login</Link>
            <button onClick={handleSubmit}>submit</button>
        </div>
      </div>
    </div>
  )
}

export default Login;

// <Link to='/admin' className='btn login-btn'>Login</Link>