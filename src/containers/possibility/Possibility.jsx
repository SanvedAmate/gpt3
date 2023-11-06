import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibilities">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>The text predictor of GPT-3 processes all the text existing on the internet and can calculate the most statistically expected output. It can write poetry, blogs, PR content, resumes, and technical documentation. The output quality is nearly the same as that of individual writing content.</p>
      
    </div>
  </div>
);

export default Possibility;