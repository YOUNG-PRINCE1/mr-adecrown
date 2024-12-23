import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <div className='header'>
        <nav className="navbar navbar-expand-sm mt-1 navbar-light bg-black">
  <div className="container">
    <Link to='/' className="navbar-brand text-light">
    <img className="img-fluid logo" src="./img/IMG-20240305-WA0002.jpg" alt />
      AP 
    </Link>
    <button className="navbar-toggler d-lg-none bg-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavId">
      <ul className="navbar-nav d-flex nn mt-2 mt-lg-0">
        <li className="nav-item">
        <Link to='/' className="nav-link active text-light" >Home</Link>
        </li>
        <li className="nav-item">
        <Link to='/about' className="nav-link active text-light" >About Us</Link>
        </li>
        <li className="nav-item">
        <Link to='/property' className="nav-link active text-light" >Property</Link>
        </li>
        <li className="nav-item">
          <Link to='/service' className="nav-link active text-light" >Service</Link>
        </li>
        <li className="nav-item">
          <Link to='/contact' className="nav-link active text-light" >Contact</Link>
        </li>
      </ul>
    </div>
    
      <Link to='/login' className="nav-link active text-light" >
      <button className="btn btn-outline-light">
        Get Started
      </button>
      </Link>
  </div>
</nav>

    </div>
  )
}

export default Header