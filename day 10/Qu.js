import React from 'react';
import FAQ from '../layout/Faq'; // Import the FAQ component

const faqData = [
  {
    question: 'What is React?',
    answer: 'React is a JavaScript library for building user interfaces.',
  },
  {
    question: 'How do I install React?',
    answer: 'You can install React by using npm or yarn. Run `npm install react` or `yarn add react` to get started.',
  },
  {
    question: 'What is JSX?',
    answer: 'JSX is a syntax extension for JavaScript used with React. It allows you to write HTML-like code within your JavaScript files.',
  },
];

function Qu() {
  return (
    <div className="Qu">
      <h1>Frequently Asked Questions</h1>
      <FAQ faqData={faqData} /> {/* Render the FAQ component */}
    </div>
  );
}

export default Qu;
