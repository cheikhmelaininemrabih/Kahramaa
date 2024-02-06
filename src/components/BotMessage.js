// DynamicBotMessage.js
import React from 'react';
import './Styles/Message.css'; // Assuming your styles are here

const DynamicBotMessage = ({ text }) => {
  return (
    <div className="bot-message-container">
      <p className="bot-message">{text}</p>
    </div>
  );
};

export default DynamicBotMessage;
