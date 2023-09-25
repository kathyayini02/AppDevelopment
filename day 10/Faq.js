import React, { useState } from 'react';

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="faq-item">
      <div className={`faq-question ${isOpen ? 'open' : ''}`} onClick={toggleOpen}>
        {question}
        <span className={`arrow ${isOpen ? 'open' : ''}`}></span>
      </div>
      {isOpen && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function FAQ({ faqData }) {
  return (
    <div className="faq-container">
      {faqData.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}

export default FAQ;
