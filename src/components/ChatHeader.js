// ChatHeader.js
import React from 'react';
import logo from './kahrama.png'; 
import './Styles/Header.css'; // Ensure this is the correct path to your CSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ChatHeader = ({ onMinimize }) => {
  return (
    <div className="chat-header">
      <div className="logo-and-text">
        <img src={logo} alt="Chatbot Logo" className="chat-logo" />
        <div>
          <div className="hi-there">Hi there</div>
          <div className="how-can-we-help">How can we help?</div>
        </div>
      </div>
      <div className="contact-and-minimize">
        <div className="contact-us-container">
          <FontAwesomeIcon icon={faPhone} className="icon-phone" />
          <span>Contact Us :</span>
          <a href="tel:109" className="phone-number">109</a>
          <span className="phone-number-plus"> | </span>
          <a href="tel:+97444069999" className="phone-number">+974 11111111</a>
        </div>
        <button className="minimize-button" onClick={onMinimize}>-</button>
      </div>
    </div>
  );
};

export default ChatHeader;
