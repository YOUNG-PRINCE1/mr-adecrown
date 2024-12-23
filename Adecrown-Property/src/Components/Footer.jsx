import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div>
        <footer className="bg-black">
  <div className="container">
    <div className="row">
      <div className="col-md-3">
        <a className="navbar-brand text-light" href="#">
          <center>
            <img className="img-fluid logo" src="./img/IMG-20240305-WA0002.jpg" alt /><br />
            Adecrown Property &amp; Co L.T.D
          </center>
        </a>
        <div className="input">
          <input placeholder="Enter your email here " className="form-control" type="text" />
          <button className="btn btn-primary position-relative"><i className="fas fa-paper-plane" /></button> 
        </div>
      </div>
      <div className="col-md-9 text-light">
        <div className="row">
          <div className="col-md-2 text-light">
            <p>Home</p>
            <p>Hero Section</p>
            <p>Features</p>
            <p>Properties</p>
            <p>Testimonials</p>
            <p>FAQ's</p>
          </div>
          <div className="col-md-2">
            <p>About us</p>
            <p>Our Story</p>
            <p>Our Work</p>
            <p>How it works</p>
            <p>Our Team</p>
            <p>Our Clients</p>
          </div>
          <div className="col-md-3">
            <p>Properties</p>
            <p>Portfolio</p>
            <p>Categories</p>
          </div>
          <div className="col-md-3">
            <p>Services</p>
            <p>Valuation Mastery</p>
            <p>Strategic Marketing</p>
            <p>Negotiation Wizardry</p>
            <p>Closing Success</p>
            <p>Property Management</p>
          </div>
          <div className="col-md-2">
            <p>Contact us</p>
            <p>Contact us</p>
            <p>Our Office</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer