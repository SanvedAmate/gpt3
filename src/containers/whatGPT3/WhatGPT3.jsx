import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 is a large language model released by OpenAI in 2020. Like its predecessor GPT-2, it is a decoder-only transformer model of deep neural network, which uses attention in place of previous recurrence- and convolution-based architectures." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="A chatbot is a software application or web interface that aims to mimic human conversation through text or voice interactions." />
      <Feature title="Knowledgebase" text="
An internal knowledge base chatbot allows you to hold a vast amount of internal company information in one place. This single source of truth is oftentimes based on the input of your customer-facing chatbot and will be optimized continuously by experts and customer service agents." />
      <Feature title="Education" text="
#1 Personalised learning

One of the greatest benefits of GPT-3 in education is the ability to create personalised learning experiences for students. By analysing student data and understanding their individual needs, interests, and learning styles, educators can create tailored content and exercises for each student." />
    </div>
  </div>
);

export default WhatGPT3;