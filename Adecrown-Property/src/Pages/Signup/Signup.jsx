import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div>
        <div className="containers">
  <div className="signup-form">
    <h2>Create Account</h2>
    <form>
      <input className='form-control bg-black text-light' type="text" placeholder="First Name" />
      <input className='form-control bg-black text-light' type="text" placeholder="Last Name" />
      <input className='form-control bg-black text-light' type="email" placeholder="Email" />
      <input className='form-control bg-black text-light' type="password" placeholder="Password" />
      <input className='form-control bg-black text-light' type="password" placeholder="Confirm Password" />
      <button className='btn btn-success'>Sign Up</button>
    </form>
    <p>Already have an account? <Link to='/login' className="nav-link active text-light" >Login</Link></p>
    <div className="or-separator">
      <hr />
      <span>or</span>
      <hr />
    </div>
    <div className="google-sign-up">
      <button><img src="./img/google.webp" alt="Google Icon" /> Sign up with Google</button>
    </div>
  </div>
</div>


    </div>
  )
}

export default Signup