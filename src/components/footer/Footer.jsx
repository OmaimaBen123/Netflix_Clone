import React from 'react';
import './Footer.css'
import ytb_icon from '../../assets/ytb.png';
import fb_icon from "../../assets/fb.png";
import twitter_icon from "../../assets/twitter.png";
import insta_icon from "../../assets/insta.png";
const Footer = () => {
  return <div className="footer">
      <div className="footer-icon">
        <img src={fb_icon} alt="" />
        <img src={insta_icon} alt="" />
        <img src={twitter_icon} alt="" />
        <img src={ytb_icon} alt="" />
      </div>
      <ul>
        <li>Audio Description </li>
        <li>Help Centre </li>
        <li>Gift Cards</li>
        <li>Media centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookies preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
    </ul>
    <p className='copy-right'> @ 2000-2024 Netflix,Inc.</p>
    </div>;
}

export default Footer
