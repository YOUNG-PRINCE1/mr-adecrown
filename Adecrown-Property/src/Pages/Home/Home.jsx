import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

import Faskq from '../../Components/Faq/Faq'
import PropertyValue from '../../Components/Property-value/PropertyValue'

import Top_Demand from '../../Mapping/Home-page-Property-Display'
import Faq1 from '../../Components/Faq/Faq1'


const Home = () => {
 
    
  return (
    <div>
        <div>
  <div className="container">
    <div className="row mt-5 ">
      <div className="col-md-6">
        <div className="ap">
          <h2>
            Discover Your Dream Property with Adecrown Property &amp; Co L.T.D 
          </h2>
          <p>
            Your journey to finding the perfect property 
            begins here. Explore our listings to find the home that matches your dreams.
          </p><br />
          <div className="button d-flex gap-4">
            
            <Link to='/service'className='btn btn-outline-secondary' >Learn More</Link>
            
            
            <Link to='/property' className="btn btn-primary" >Browse Property</Link>
            
          </div><br /><br /><br />
          <div className=" d-flex ex gap-3">
            <div>
              <h4>
                200+
              </h4>
              <p>Happy customers</p>
            </div>
            <div>
              <h4>10k+</h4>
              <p>Properties For Clients</p>
            </div>
            <div>
              <h4>16+</h4>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 mt-5">
        <img className="img-fluid" src="./img/IMG-20240305-WA0002.jpg" alt />
      </div>
    </div>
  </div>

  <PropertyValue/>
  
  <div className="container">
    <div className="row">
      <div className="col-md-10">
        <h2>
          Featured Properties
        </h2>
        <p>
          Explore our handpicked selection of featured properties. Each listing offers a 
          glimpse into exceptional homes and investments available through Adecrown Property. Click 
          "View Details" for more information.
        </p>
      </div>
      <div className="col-md-2">
        <button className="btn btn-primary mt-5">
          View All Properties
        </button>
      </div>
    </div>
    <div className="row mt-5">
      {
        Top_Demand?.map((row) => (
          <div key={row?.id} className="col-md-4 dd">
        <img className="img-fluid" src={row.image} alt />
        <h5>{row?.name}</h5>
        <p>{row?.description}</p>
        <div className="row div gap-1">
          <div className="col-md-4 ">
            <img src="./img/Icon.png" alt />
            <p className="mt-3">{row?.bedroom}-Bedroom</p>
          </div>
          <div className="col-md-4 ">
            <img src="./img/BACKGROUND_2.png" alt />
            <p className="mt-3">{row?.bathroom}-Bathroom</p>
          </div>
          <div className="col-md-4 ">
            <img src="./img/Icon (1).png" alt />
            <p className="mt-3">Villa</p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4">
            <p className>Price</p>
            <p>${row?.price}</p>
          </div>
          <div className="col-md-8">
            
            <Link to='/details' className="btn btn-primary" >
              View Property Details
            </Link>
          </div>
        </div>
      </div>
        ))
      }
      
    </div>
  </div>
  <div className="container mt-5 ">
    <h4>What Our Clients Say</h4>
    <p>Read the success stories and heartfelt testimonials from our valued clients. 
      Discover why they chose Estatein for their real estate needs.
    </p>
    <div className="row tp">
      <div className="col-md-4 oo">
        <img className="star" src="./img/Container.png" alt />
        <p className="mt-2"><strong>Exceptional Service!</strong></p>
        <p>Our experience with Adecrown Property was outstanding. Their team's dedication and 
          professionalism made finding our dream home a breeze. Highly recommended!
        </p>
        <div className="pics d-flex">
          <div className="jj">
            <img src="./img/Profile.png" alt />
            <div className="tex">
              <p><strong>Wade Warren</strong> <br />USA, California</p>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 oo">
        <img className="star" src="./img/Container.png" alt />
        <p className="mt-2"><strong>Efficient and Reliable</strong></p>
        <p>
          Adecrown Property provided us with top-notch service. They helped us sell our property 
          quickly and at a great price. We couldn't be happier with the results.
        </p>
        <div className="pics d-flex">
          <div className="jj">
            <img src="./img/Profile-1.png" alt />
            <div className="tex">
              <p><strong>Emelie Thomson </strong><br />USA, California</p>
              <p />
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 oo">
        <img className="star" src="./img/Container.png" alt />
        <p className="mt-2"><strong>Exceptional Service!</strong></p>
        <p>
          The Adecrown Property team guided us through the entire buying process. Their 
          knowledge and commitment to our needs were impressive. Thank you for your support!
        </p>
        <div className="pics d-flex">
          <div className="jj">
            <img src="./img/Profile-2.png" alt />
            <div className="tex">
              <p><strong>John Mans</strong><br />USA, California</p>
              <p />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Faq1/>
  
  
</div>

    </div>
  )
}

export default Home