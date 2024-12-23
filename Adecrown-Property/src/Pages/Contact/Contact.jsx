import React from 'react'
import Form from '../../Components/Form/Form'
import { Link } from 'react-router-dom'

import './Contact.css'

const Contact = () => {
  return (
    <div>
        <div className="container mt-5">
            <h4>
                Get in Touch with Adecrown Property 
            </h4>
            <p className='mt-3'>
                Welcome to Adecrown's Contact Us page. We're here to 
                assist you with any inquiries, requests, or feedback 
                you may have. Whether you're looking to buy or sell a 
                property, explore investment opportunities, or simply 
                want to connect, we're just a message away. Reach out 
                to us, and let's start a conversation.
            </p>
        </div>
        <div className="row pp gap-2 m-5">
    <div className="col-md-3">
      <center>
        <img className src="./img/Icon Container (13).png" alt /><br />
        <p>info@adecrownproperty.com</p></center>
    </div>
    <div className="col-md-3">       
      <center>
        <img src="./img/Icon Container (14).png" alt /><br />
        <p>08025818967</p> </center>         
    </div>
    <div className="col-md-3">   
      <center>
        <img src="./img/Icon Container (15).png" alt /><br />
        <p>Main Headquarters</p>   
      </center>    
    </div>
    <div className="col-md-3">
      <center>
        <img src="./img/Icon Container (16).png" alt /><br />
        <p>Smart Investments, Informed Decisions</p> 
      </center>
    </div>
  </div>
  <div className="container mt-5">
    <h4>Let's Connect</h4>
    <p className='mt-3'>
    We're excited to connect with you and learn more about your 
    real estate goals. Use the form below to get in touch with 
    Adecrown Property. Whether you're a prospective client, partner, or 
    simply curious about our services, we're here to answer your 
    questions and provide the assistance you need.
    </p>
    <div className="mt-5">
    <div className="form">
  <div className="row">
    <div className="col-md-4">
      <label htmlFor>First Name</label>
      <input placeholder="Enter First Name" className="form-control mt-3 bg-black text-light" type="text" />
    </div>
    <div className="col-md-4">
      <label htmlFor>Last Name</label>
      <input placeholder="Enter last Name" className="form-control mt-3 bg-black text-light" type="text" />
    </div>
    <div className="col-md-4">
      <label htmlFor>Email</label>
      <input placeholder="Enter Your Email" className="form-control mt-3 bg-black text-light" type="text" />
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-4">
      <label htmlFor>Phone</label>
      <input placeholder="Enter Phone Number" className="form-control mt-3 bg-black text-light" type="text" />
    </div>
    <div className="col-md-4">
      <label htmlFor>Inquiry Type</label>
      <select className="mt-3" id="myDropdown" style={{width: '100%', height: '50%'}}>
        
        <option value="option1">Select Inquiry Type</option>
        <option value="option2">Buy</option>
        <option value="option3">Sell</option>
        <option value="option4">Investment</option>
        <option value="option5">Property Consultation</option>
        <option value="option6">Property Reviews</option>
        <option value="option7">Property Development</option>

      </select>
    </div>
    <div className="col-md-4">
      <label htmlFor>How Did You Hear About Us?</label>
      <select className="mt-3" id="myDropdown" style={{width: '100%', height: '50%'}}>
      <option value="">Google</option>
      <option value="">Facebook</option>
      <option value="">Newsletter</option>
      <option value="">Tik Tok</option>
      <option value="">Instagram</option>
      <option value="">Local Advertising</option>
      <option value="">Friend</option>
      <option value="">Other</option>
      </select>
    </div>
  </div>
  <div className=" mt-4">
    <label htmlFor>Message</label>
    <input className="form-control mt-2 message bg-black text-light" placeholder="Enter Message Here" type="text" />
  </div>
  <div className="terms mt-4">
    <div className="row">
      <div className="col-md-9 condition">
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id defaultValue="option1" />
          <label className="form-check-label" htmlFor><p className>I agree with 
              <a href="#">Terms of Use </a>and Privacy Policy</p>
          </label>
        </div>            
      </div>
      <div className="col-md-3">
        <button className="btn btn-primary">Submit Message</button>
      </div>
    </div>
  </div>
</div>

    </div>
    <div className="location mt-5">
        <h4>
        Discover Our Office Locations
        </h4>
        <p className="mt-3">
        Estatein is here to serve you across multiple locations. 
        Whether you're looking to meet our team, discuss real estate 
        opportunities, or simply drop by for a chat, we have offices 
        conveniently located to serve your needs. Explore the categories 
        below to find the Adecrown office.
        </p>

        <div className="mt-5">
            <div className="row get-to">
                <div className="col-md-6 direction mt-3">
                    <p>Main Headquarters</p>
                    <h5>No 10, Deji Omo-Owo street, Lagos, Nigeria.</h5>
                    <p className='mt-2'>
                      Our main headquarters serve as the heart of Adecrown. 
                      Located in the bustling city center, this is where our core 
                      team of experts operates, driving the excellence and innovation that define us.
                    </p>
                    <div 
                    className="mt-2 d-flex align-item-center justify-content-center border rounded-3 border-secondary">
                    <Link to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light"><img src="./img/Subtract.png" 
                    alt="" />adecrown2000@gmail.com</Link>
                    </div>
                    <div className="row mt-2 ">
                    <div className="col-md-6">
                    <Link 
                    to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light dir"><img src="./img/Subtract (1).png" 
                    alt="" />get direction 
                    </Link>
                    </div>
                    <div className="col-md-6">
                    <Link 
                    to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light dir"><img src="./img/Subtract (1).png" 
                    alt="" />get direction 
                    </Link>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 direction mt-3">
                    <p>Main Headquarters</p>
                    <h5>No 10, Deji Omo-Owo street, Lagos, Nigeria.</h5>
                    <p className='mt-2'>
                      Our main headquarters serve as the heart of Adecrown. 
                      Located in the bustling city center, this is where our core 
                      team of experts operates, driving the excellence and innovation that define us.
                    </p>
                    <div 
                    className="mt-2 d-flex align-item-center justify-content-center border rounded-3 border-secondary">
                    <Link to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light"><img src="./img/Subtract.png" 
                    alt="" />adecrown2000@gmail.com</Link>
                    </div>
                    <div className="row mt-2 ">
                    <div className="col-md-6">
                    <Link 
                    to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light dir"><img src="./img/Subtract (1).png" 
                    alt="" />get direction 
                    </Link>
                    </div>
                    <div className="col-md-6">
                    <Link 
                    to='mailto:adesemowomuhammed5@gmail.com' 
                    className="navbar-brand text-light dir"><img src="./img/Subtract (1).png" 
                    alt="" />get direction 
                    </Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    </div>
  )
}

export default Contact