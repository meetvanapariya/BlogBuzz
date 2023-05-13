import React from 'react';

const HeroSection =  ({title = 'Read Latest Blogs' }) => (
  <section className="hero-section hero-section-blog">
    <div className="container">
      <h1>
        Blog
      </h1>
      <h4>{title}</h4>
      <p>Discover insightful articles and stay up-to-date with the latest trends.</p>
      <div className="button-div">
        <button className="learn-more-btn">Learn More</button>
        <button className="contact-us-btn">Contact Us</button>
      </div>
    </div>
  </section>
);
export default HeroSection;