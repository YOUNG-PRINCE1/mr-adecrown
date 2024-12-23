import React from 'react'
import './Faq.css'


const Faskq = () => {

    function Faq() {
        document.querySelectorAll('.faq-question').forEach(item => {
            item.addEventListener('click', () => {
                const answer = item.nextElementSibling;
                answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
            });
        });
    }
  return (
    <div>
        <div className="container mt-5">
    <h4>Frequently Asked Questions</h4>
    <p>
      Find answers to common questions about Adecrown Property services, 
      property listings, and the real estate process. We're here to provide clarity and 
      assist you every step of the way.
    </p>
    <div className="faq-section">
      <div className="faq-item">
        <div className="faq-question">Is the website real ?</div>
        <div className="faq-answer">
          sure it real and trusted 
        </div>
      </div>
      <div className="faq-item">
        <div className="faq-question">How can i search for property ?</div>
        <div className="faq-answer">Go to the property page and search for your prefered home</div>
      </div>
      <div onClick={Faq}  className="faq-item">
        <div className="faq-question">What if I win an auction ?</div>
        <div className="faq-answer">Congratulations! You just scored a deal!</div>
      </div>
      <div className="faq-item">
        <div className="faq-question">How can i make payment ?</div>
        <div className="faq-answer">
          Once you choose your the property of your choice you will be 
          directed to the agent in charge for payment
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default Faskq