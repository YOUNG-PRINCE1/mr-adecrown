import React from 'react'
import './Details.css'
import Faskq from '../../Components/Faq/Faq';
import Carousel from '../../Components/Carousel';

const Details = () => {

    const carouselSlide = document.querySelector('.carousel-slide');
    const carouselImages = document.querySelectorAll('.carousel-slide img');

    let counter = 0;
    // const size = carouselImages[0].clientWidth;

    function nextSlide() {
        if (counter >= carouselImages.length - 2) {
            counter = -1;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * ++counter) + 'px)';
    }

    function prevSlide() {
        if (counter <= 0) {
            counter = carouselImages.length - 2;
        }
        carouselSlide.style.transform = 'translateX(' + (-size * --counter) + 'px)';
    }

    window.addEventListener('resize', () => {
        carouselSlide.style.transition = 'none';
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

  return (
    <div>
        <div className="container mt-5">
  <div className="abt d-flex">
    <h5>
      Seaside Serenity Villa
    </h5>
    <p className="p">
      <i className="fas fa-map-marker" /> Olowoira, Lagos
    </p>
    <div className="price">
      <p>Price</p>
      <h5>$199,999</h5>
    </div>
  </div>
  
  <Carousel/>
  <div className="row mt-3">
    <div className="col-md-6 discrip ">
      <h5>
        Description
      </h5>
      <p>
        Discover your own piece of paradise with the Seaside 
        Serenity Villa. T With an open floor plan, breathtaking 
        ocean views from every room, and direct access to a pristine 
        sandy beach, this property is the epitome of coastal living.
      </p>
      <div className="row info">
        <hr />
        <div className="col-md-4">
          <img src="img/Icon.png" alt />
          <p>04 Bedroom</p>
        </div>
        <div className="col-md-4">
          <img src="img/BACKGROUND_2.png" alt />
          <p>03 Bathroom</p>
        </div>
        <div className="col-md-4">
          <img src="img/Icon (2).png" alt />
          <p>2,500 Square Feet</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 features">
      <h4>
        Key Features and Amenities
      </h4>
      <div className="list d-flex mt-5">
        <img src="./img/Vector 449 (Stroke).png" alt />
        <p>
          Expansive oceanfront terrace for outdoor entertaining
        </p>
      </div>
      <div className="list d-flex mt-3">
        <img src="./img/Vector 449 (Stroke).png" alt />
        <p>
          Gourmet kitchen with top-of-the-line appliances
        </p>
      </div>
      <div className="list d-flex mt-3">
        <img src="./img/Vector 449 (Stroke).png" alt />
        <p>
          Private beach access for morning strolls and sunset views
        </p>
      </div>
      <div className="list d-flex mt-3">
        <img src="./img/Vector 449 (Stroke).png" alt />
        <p>
          Master suite with a spa-inspired bathroom and ocean-facing balcony
        </p>
      </div>
      <div className="list d-flex mt-3">
        <img className src="./img/Vector 449 (Stroke).png" alt />
        <p>
          Private garage and ample storage spacem
        </p>
      </div>
    </div>
    <div className=" row mt-5">
      <div className="col-md-4">
        <h3>
          Inquire About Seaside Serenity Villa
        </h3>
        <p>
          Interested in this property? Fill out the form 
          below, and our real estate experts will get back 
          to you with more details, including scheduling a 
          viewing and answering any questions you may have.
        </p>
      </div>
      <div className="col-md-8 form">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor>First Name</label>
            <br /><br />
            <input placeholder="Enter First Name " className="form-control bg-black" type="text" />
          </div>
          <div className="col-md-6">
            <label htmlFor>Last Name</label>
            <br /><br />
            <input placeholder="Enter Last Name " className="form-control bg-black" type="text" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <label htmlFor>Email</label>
            <br /><br />
            <input placeholder="Enter Email Adress" className="form-control bg-black" type="text" />
          </div>
          <div className="col-md-6">
            <label htmlFor>Phone</label>
            <br /><br />
            <input placeholder="Enter Phone Number " className="form-control bg-black" type="text" />
          </div>
        </div>
        <div className="select mt-3">
          <label htmlFor>Selected Property</label>
          <br /><br />
          <p>Seaside Serenity Villa, Malibu, California</p>
          <label htmlFor>Message</label>
          <input placeholder="Enter your message here" className="form-control bg-black input" type="text" />
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
              <button className="btn btn-primary">Submit Form</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="pricing-details mt-5">
    <h3>
      Comprehensive Pricing Details
    </h3>
    <p>
      At Estatein, transparency is key. We want you to 
      have a clear understanding of all costs associated 
      with your property investment. Below, we break down 
      the pricing for Seaside Serenity Villa to help you make an informed decision
    </p>
    <div className="note mt-4">
      <h5>
        Note
      </h5>
      <p>
        The figures provided above are estimates and may vary 
        depending on the property, location, and individual circumstances.
      </p>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-2">
      <p>
        Listing Price
      </p>
      <h3>
        $1,500,000
      </h3>
    </div>
    <div className="col-md-10 fee-list">
      <div className="add-fee">
        <p>
          Additional Fee
        </p>
        <button className="btn btn-primary">
          Learn more
        </button>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Property Transfer Tax</p>
          <div className="transfer">
            <p>
              <strong>
                $25,000
              </strong>
            </p>
            <p className="regulations">
              Based on the sale price and local regulations
            </p>
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Legal Fee</p>
          <div className="transfer">
            <p>
              <strong>
                $3,000
              </strong>
            </p>
            <p className="regulations">
              Approximate cost for legal services, including title transfer
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Home Inspection</p>
          <div className="transfer">
            <p>
              <strong>
                $500
              </strong>
            </p>
            <p className="regulations">
              Recommended for due diligence
            </p>
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Property Insurance</p>
          <div className="transfer">
            <p>
              <strong>
                $1,200
              </strong>
            </p>
            <p className="regulations">
              Annual cost for comprehensive property insurance
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="row">
        <div className="col-md-6">
          <p>Mortgage Fees</p>
          <div className="transfer">
            <p>
              <strong>
                Varles
              </strong>
            </p>
            <p className="regulations">
              If applicable, consult with your lender for specific details
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-2" ></div>
    <div className="col-md-10" >
      <div className="monthly-cost">
      <h5 >
        Monthly Costs
      </h5>
      <button className='btn btn-primary'>Learn More</button>
      <hr className='mt-4'/>
      <p>
        Property Taxes
      </p>
      <div className="property-task">
        <p> <strong>$300</strong> </p>
        <p>
          Approximate monthly property tax based on the sale price and local rates
        </p>
      </div>
      <hr />
      <p>
        Homeowners' Association Fee
      </p>
      <div className="property-task">
        <p> <strong>$300</strong> </p>
        <p>
          Monthly fee for common area maintenance and security
        </p>
      </div>
      </div>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-md-2"></div>
    <div className="col-md-10 fee-list">
      <div className="add-fee">
        <p>
        Total Initial Costs
        </p>
        <button className="btn btn-primary">
          Learn more
        </button>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Listing Price</p>
          <div className="transfer">
            <p>
              <strong>
              $1,250,000
              </strong>
            </p>
            
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Additional Fee</p>
          <div className="transfer">
            <p>
              <strong>
              $29,700
              </strong>
            </p>
            <p className="regulations">
            Property transfer tax, legal fees, inspection, insurance
            </p>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Down Payment</p>
          <div className="transfer">
            <p>
              <strong>
              $250,000
              </strong>
            </p>
            <p className="regulations">
              20%
            </p>
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Mortgage Amount</p>
          <div className="transfer">
            <p>
              <strong>
                $1,000,000
              </strong>
            </p>
            <p className="regulations">
              If applicable
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <div className="row mt-5">
    <div className="col-md-2"></div>
    <div className="col-md-10 fee-list">
      <div className="add-fee">
        <p>
        Monthly Expenses
        </p>
        <button className="btn btn-primary">
          Learn more
        </button>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Property Taxes</p>
          <div className="transfer">
            <p>
              <strong>
              $1,250
              </strong>
            </p>
            
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Homeowners' Association Fee</p>
          <div className="transfer">
            <p>
              <strong>
              $300
              </strong>
            </p>
            
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="row">
        <div className="col-md-6">
          <p>Mortgage Payment</p>
          <div className="transfer">
            <p>
              <strong>
              Varies based on terms and interest rate
              </strong>
            </p>
            <p className="regulations">
              if applicable
            </p>
          </div>
        </div>
        <div className="col-md-6 marleft">
          <p>Property Insurance</p>
          <div className="transfer">
            <p>
              <strong>
                $100
              </strong>
            </p>
            <p className="regulations">
            Approximate monthly cost
            </p>
          </div>
        </div>
      </div>
      
    </div>
  </div>

  <Faskq/>
  
  
</div>

    </div>
  )
}

export default Details