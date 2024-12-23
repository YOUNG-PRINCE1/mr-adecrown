import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="containers">
        <div className="login-form">
  <h2>Login</h2>
  <form>
    <input className='form-control text-light' type="email" placeholder="Email or Phone" />
    <input className='form-control text-light' type="password" placeholder="Password" />
    <button className='btn btn-success'>Login</button>
  </form>
  <p>Don't have an account? <Link to='/signup' className="nav-link active text-light" >create one</Link></p>
  <div className="or-separator">
    <hr />
    <span>or</span>
    <hr />
  </div>
  <div className="google-sign-in">
    <button><img  src="./img/google.webp" alt="" /> Sign in with Google</button>
  </div>
</div>
    </div>


  )
}

export default Login