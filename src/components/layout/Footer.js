import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-10 px-10 mt-30 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="mt-5">I'm a Copenhagen based Optimization and Analytics specialist with more
        than 2 years of experience helping B2B and B2C companies. My educational background is within
        eBusiness and I hold a MSc in Business Administration and eBusiness from CBS.</p>
      </div>
      <div className="flex-1 px-30">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com/in/s%C3%B8ren-kristian-simonsen/" 
            target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
