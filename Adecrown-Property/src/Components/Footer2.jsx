import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer2 = () => {
  return (
    <div>
        <div className="container mt-5">
    <div className="row gap">
      <div className="col-md-10">
        <h4>Start Your Real Estate Journey Today</h4>
        <p>
          Your dream property is just a click away. Whether you're looking for a new home, 
          a strategic investment, or expert real estate advice, Adecrown Property is here to assist 
          you every step of the way. Take the first step towards your real estate goals and 
          explore our available properties or get in touch with our team for personalized assistance.
        </p>
      </div>
      <div className="col-md-2 mt-5">
        <button className="btn btn-primary">
        <Link to='/property' className="nav-link active text-light" >Explore Property</Link>
        </button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Footer2