import React, { useState } from 'react';

const Faq1= () => {
  // Data for FAQ
  const faqData = [
    {
      question: "Is the website real ?",
      answer: "sure it real and trusted."
    },
    {
      question: "How can i search for property ?",
      answer: "Go to the property page and search for your prefered home."
    },
    {
      question: "How can i make payment ?",
      answer: "Once you choose your the property of your choice you will be directed to the agent in charge for payment."
    },
    {
      question: "can i see the property physically",
      answer: "sure it is important to see the property physically to be satisfied."
    },
  ];

  // State to track which FAQ is expanded
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle function to open/close FAQ items
  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the currently open item
    } else {
      setOpenIndex(index); // Open the selected item
    }
  };

  return (
    <div className='mt-5 mb-3' style={styles.container}>
      <h4>Frequently Asked Questions</h4>
    <p>
      Find answers to common questions about Adecrown Property services, 
      property listings, and the real estate process. We're here to provide clarity and 
      assist you every step of the way.
    </p>
      <div style={styles.faqContainer}>
        {faqData.map((faq, index) => (
          <div key={index} style={styles.faqItem}>
            <div
              style={styles.question}
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span style={styles.icon}>{openIndex === index ? '^' : '+'}</span>
            </div>
            {openIndex === index && (
              <div style={styles.answer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '20px auto',
    maxWidth: '1100px',
  },
  title: {
    textAlign: 'center',
    color: '#333',
  },
  faqContainer: {
    marginTop: '20px',
  },
  faqItem: {
    borderBottom: '1px solid #ddd',
    padding: '10px 0',
  },
  question: {
    fontSize: '18px',
    fontWeight: 'bold',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  answer: {
    marginTop: '10px',
    fontSize: '16px',
    color: '#fff',
  },
  icon: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginLeft: '10px',
  },
};

export default Faq1;
