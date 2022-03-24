import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-10 px-10 mt-30 text-gray-800 bg-zinc">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">About Me</h2>
        <p className="mt-5">Copenhagen based Data Analyst with more
        than 2 years of experience helping B2B and B2C companies scale digitally.</p>
      </div>
      <div className="flex-1 px-30">
        <h2 className="text-lg font-semibold">Social Media</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="https://www.linkedin.com" 
            target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
