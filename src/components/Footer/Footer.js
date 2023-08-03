import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className='footer-links'>
        <a href="terms-and-conditions.html">T&C</a>
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="contact-us.html">Contact Us</a>
      </div>
    </footer>
  );
};

export default Footer;