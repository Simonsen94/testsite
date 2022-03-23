import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import LogoIcon from '../../svg/LogoIcon';
import Button from '../Button';
import { Link } from "gatsby";

const Header = () => (
  <header className="sticky top-0 bg-white shadow">
    <div className="container flex flex-col sm:flex-row justify-between items-center mx-auto py-4 px-8">
      <div className="flex items-center text-2xl">
        <div className="w-12 mr-3">
          <LogoIcon />
        </div>
        <Link to="/" style={{ color: "black" }}>
          SME Analyst
        </Link>
      </div>
      <div className="flex mt-4 sm:mt-0">
        <Link to="/" style={{ color: "black" }} className='px-4'>
          Home
        </Link>
        <Link to="/services" style={{ color: "black" }} className="px-4">
          Services
        </Link>
        <Link to="/blog" style={{ color: "black" }} className="px-4 font-semibold">
          Blog
        </Link>
        <AnchorLink className="px-4" style={{ color: "black" }} href="#stats">
          Stats
        </AnchorLink>
        <AnchorLink className="px-4" style={{ color: "black" }} href="#testimonials">
          Testimonials
        </AnchorLink>
      </div>
      <div className="hidden md:block">
        <Button className="text-sm">
          <Link to="/contact" style={{ color: "white" }}>
            Get in contact
          </Link>
        </Button> 
      </div>
    </div>
  </header>
);

export default Header;
