import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Natural Language Understanding',
    text: 'GPT-3 has the ability to understand and generate human-like text, making it useful for various natural language processing tasks, such as language translation, text summarization, and chatbot applications',
  },
  {
    title: 'Large-Scale Language Model',
    text: 'GPT-3 is a very large and versatile language model, consisting of 175 billion parameters. This extensive training data allows it to generate coherent and contextually relevant responses to a wide range of text inputs.',
  },
  {
    title: 'Multilingual Support',
    text: 'GPT-3 is capable of working with multiple languages, making it a valuable tool for global applications. It can understand and generate text in various languages, expanding its usability beyond just English.',
  }
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Future is bright. Step into the future and make it happen</h1>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;