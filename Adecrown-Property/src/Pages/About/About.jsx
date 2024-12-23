import React from 'react'
import './About.css'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <div className="container">
  <div className="row  ">
    <div className="col-md-6">
      <div className="ap">
        <h2>
          Our journey
        </h2>
        <p>
          Our story is one of continuous growth and evolution. We started 
          as a small team with big dreams, determined to create a real estate 
          platform that transcended the ordinary. Over the years, we've expanded 
          our reach, forged valuable partners hips, and gained the trust of countless clients.
        </p><br />
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
    <div className="col-md-6 container">
      <img className="img-fluid" src="./img/Image (4).png" alt />
    </div>
  </div>
  <div className="row mt-4">
    <div className="col-md-3">
      <h4>
        Our values
      </h4>
      <p className="value">
        Our story is one of continuous growth and evolution. 
        We started as a small team with big dreams, determined to 
        create a real estate platform that transcended the ordinary.
      </p>
    </div>
    <div className="col-md-9">
      <div className="row thep">
        <div className="col-md-6">
          <div className="the ">
            <div className="icon-flex">
            <img className='icon-container' src="./img/Icon Cont.png" alt="" />
            <h5>Trust</h5>
            </div>
            <p>Trust is the cornerstone of every successful real estate transaction.</p>
          </div>
          <div className>
          <div className="icon-flex">
          <img className='icon-container'  src="./img/Icon Cont.png" alt="" />
          <h5>Client-Centric</h5>
          </div>
            <p>Your dreams and needs are at the center of our universe. We listen, understand.</p>
          </div>
        </div>
        <div className="col-md-6 left">
          <div className="the ">
          <div className="icon-flex">
          <img className='icon-container'  src="./img/Icon Cont.png" alt="" />
          <h5>Excellence</h5>
          </div>
            <p>
              We set the bar high for ourselves. From the properties we list to the services we provide.
            </p>
          </div>
          <div className>
          <div className="icon-flex">
          <img className='icon-container'  src="./img/Icon Cont.png" alt="" />
          <h5>Our Commitment</h5>
          </div>
            <p>
              We are dedicated to providing you with the highest level of service, professionalism, and support.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <h4>
      Our Achievements 
    </h4>
    <p className="value">
      Our story is one of continuous growth and evolution. We started as a small team 
      with big dreams, determined to create a real estate platform that transcended the ordinary.
    </p>
    <div className="row tp">
      <div className="col-md-4">
        <div className="oo">
          <h5>3+ Years of Excellence</h5>
          <p>
            With over 3 years in the industry, we've amassed a wealth of knowledge and experience, 
            becoming a go-to resource for all things real estate.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="oo">
          <h5>Happy Clients</h5>
          <p>
            Our greatest achievement is the satisfaction of our clients. Their success stories fuel 
            our passion for what we do.
          </p>
        </div>
      </div>
      <div className="col-md-4">
        <div className="oo">
          <h5>Industry Recognition</h5>
          <p>
            We've earned the respect of our peers and industry leaders, with accolades and awards 
            that reflect our commitment to excellence.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <h4>
      Navigating the Adecrown Property Experience
    </h4>
    <p className="value">
      At Adecrown Property, we've designed a straightforward process to help you find and purchase your 
      dream property with ease. Here's a step-by-step guide to how it all works.
    </p>
  </div>
  <div className="row mt-5">
    <div className="col-md-4">
      <p className="step">Step 01</p>
      <div className="box">
        <h5>Discover a World of Possibilities</h5>
        <p>
          Your journey begins with exploring our carefully curated property listings. 
          Use our intuitive search tools to filter properties based on your preferences, 
          including location, type, size, and budget.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <p className="step">Step 02</p>
      <div className="box">
        <h5>Narrowing Down Your Choices</h5>
        <p>
          Once you've found properties that catch your eye, save them to your account or 
          make a shortlist. This allows you to compare and revisit your favorites as you 
          make your decision.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <p className="step">Step 03</p>
      <div className="box">
        <h5>Personalized Guidance</h5>
        <p>
          Have questions about a property or need more information? Our dedicated team 
          of real estate experts is just a call or message away.
        </p>
      </div>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-4">
      <p className="step">Step 04</p>
      <div className="box">
        <h5>See It for Yourself</h5>
        <p>
          Arrange viewings of the properties you're interested in. We'll coordinate with 
          the property owners and accompany you to ensure you get a firsthand look at your 
          potential new home.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <p className="step">Step 05</p>
      <div className="box">
        <h5>Making Informed Decisions</h5>
        <p>
          Before making an offer, our team will assist you with due diligence, including 
          property inspections, legal checks, and market analysis. We want you to be fully 
          informed and confident in your choice.
        </p>
      </div>
    </div>
    <div className="col-md-4">
      <p className="step">Step 06</p>
      <div className="box">
        <h5>Getting the Best Deal</h5>
        <p>
          We'll help you negotiate the best terms and prepare your offer. Our goal is to secure 
          the property at the right price and on favorable terms.
        </p>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <h4>Meet the Adecrown Property Team</h4>
    <p>
      At Estatein, our success is driven by the dedication and expertise of our team. Get 
      to know the people behind our mission to make your real estate dreams a reality.
    </p>
  </div>
  <div className="row">
    <div className="col-md-3">
      <div className="team">
        <div className>
          <img className="img-fluid member" src="./img/C.E.O Adecrown .jpg" alt />
          <center>
            <Link to='https://wa.me/08025818969'>
            <img className='whatsapp-icon' src="./img/whatsapp.png" alt="" />
            </Link>
          </center>
        </div>
        <center>
          <p><strong>Adesemowo Adeleke</strong></p>
          <p>Founder</p>
        </center>
        <div className="input position-relative">
          <input placeholder="Say Hello 🖐" className="form-control rounded-5 bg-black text-light" type="text" />
          <button className="btn btn-primary rounded-5 position-absolute top">
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="team">
        <div className>
          <img className="img-fluid member" src="./img/Image (1).png" alt />
          <center>
            <Link to='https://wa.me/08067760502'>
              <img className='whatsapp-icon' src="./img/whatsapp.png" alt="" />
            </Link>
          </center>
        </div>
        <center>
          <p><strong>Adesemowo Muhammed</strong></p>
          <p>Manager</p>
        </center>
        <div className="input position-relative">
          <input placeholder="Say Hello 🖐" className="form-control rounded-5 bg-black text-light" type="text" />
          <button className="btn btn-primary rounded-5 position-absolute top">
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-3 ">
      <div className="team">
        <div className>
          <img className="img-fluid member" src="./img/Image (1).png" alt />
          <center>
            <Link to='https://wa.me/07085384538'>
              <img className='whatsapp-icon' src="./img/whatsapp.png" alt="" />
            </Link>
          </center>
        </div>
        <center>
          <p><strong>Adesemowo Omowunmi</strong></p>
          <p>Chief Real Estate Officer</p>
        </center>
        <div className="input position-relative">
          <input placeholder="Say Hello 🖐" className="form-control rounded-5 bg-black text-light" type="text" />
          <button className="btn btn-primary rounded-5 position-absolute top">
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
    <div className="col-md-3">
      <div className="team">
        <div className>
          <img className="img-fluid member" src="./img/Image (1).png" alt />
          <center>
            <Link to='https://wa.me/08025818969'>
              <img className='whatsapp-icon' src="./img/whatsapp.png" alt="" />
            </Link>
          </center>
        </div>
        <center>
          <p><strong>Adesemowo Muhammed</strong></p>
          <p>Manager</p>
        </center>
        <div className="input position-relative">
          <input placeholder="Say Hello 🖐" className="form-control rounded-5 bg-black text-light" type="text" />
          <button className="btn btn-primary rounded-5 position-absolute top">
            <i className="fas fa-paper-plane" />
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="mt-5">
    <h4>Our Valued Clients</h4>
    <p>
      At Estatein, we have had the privilege of working with a diverse range of clients across 
      various industries. Here are some of the clients we've had the pleasure of serving
    </p>
    <div className="row mt-5">
      <div className="col-md-6 ">
        <div className="row box2">
          <div className="col-md-9">
            <p>Since 2019</p>
            <h5>Wash 94.4 FM</h5>
          </div>
          <div className="col-md-3">
            <button className="btn btn-dark">Visit Website</button>
          </div>
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="row box2">
          <div className="col-md-9">
            <p>Since 2018</p>
            <h5>GreenTech Enterprises</h5>
          </div>
          <div className="col-md-3">
            <button className="btn btn-dark">
              Visit Website
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="map">
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 location">
          <h2>Our Location</h2>
          <h5>
            Unicorn Estate, <br />
            No 10, Deji Omo-Owo street, <br />
            Ojodu-Berger, <br />
            Lagos-State,<br />
            Nigeria.
          </h5>
        </div>
        <div className="col-md-6">
          <center>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.131250884769!2d3.3757228567474273!3d6.630616133767197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b934e200dfd41%3A0x335c195bfd83838b!2sADECROWN%20PROPERTY%20%26%20CO%2C%20LTD.!5e0!3m2!1sen!2sng!4v1731587932301!5m2!1sen!2sng" 
            width={320} height={400} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
          </center>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default About