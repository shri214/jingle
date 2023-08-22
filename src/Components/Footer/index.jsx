
import React from 'react';
import './index.css'; // Make sure to import your CSS file

import { faFacebookF, faInstagram, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="grid-item">
        <h2>Have Questions?</h2>
        <a href="#">Phone: +918506922777</a>
        <a href="#">+918506944777</a>
        <a href="#">jingleholidaybazar@gmail.com</a>
        <a href="#">thejingleholidaybazar@gmail.com</a>
        <a href="#">24/7 Dedicated Customer Support</a>
      </div>
      <div className="grid-item">
        <h2>Quick Links</h2>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">
          India
          <select name="" id="">
            <option value="North">North</option>
            <option value="West">West</option>
            <option value="East">East</option>
            <option value="South">South</option>
          </select>
        </a>
        <a href="#">Destinations</a>
        <a href="#">Hotels</a>
        <a href="#">Gallery</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="grid-item">
        <h2>Social Media</h2>
        <FontAwesomeIcon icon={faFacebookF} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faLinkedinIn} />
      </div>
      <div className="grid-item store-container">
        <h2>Newsletter</h2>
        <a href="#">Enter your E-mail Address</a>
        <a href="#">
          <input type="text" />
        </a>
        <a href="#">*We Never Send Spam</a>
        <a href="#">
          <button>Subscribe</button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
