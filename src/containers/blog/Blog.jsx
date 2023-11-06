import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 01, 2020" text="GPT-3 is free and available for the public to use. You can access the model through the OpenAI Playground." />
        <Article imgUrl={blog03} date="Sep 27, 2023" text="OpenAI GPT-3: Everything You Need to Know" />
        <Article imgUrl={blog04} date="Nov 24, 2020" text="Meet GPT-3. It Has Learned to Code (and Blog and Argue)." />
        <Article imgUrl={blog05} date="Jan 26, 2021" text="GPT-3: All you need to know about AI language model - Sigmoid" />
      </div>
    </div>
  </div>
);

export default Blog;
