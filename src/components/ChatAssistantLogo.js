// ChatAssistantLogo.js
import React from 'react';
import chatLogo from './kahramalogo.png'; 
import './Styles/Logo.css'
const ChatAssistantLogo = ({ onToggleChat }) => {
  return (
    <button className="chat-assistant-logo" onClick={onToggleChat}>
      <img src={chatLogo} alt="Chat Assistant" />
    </button>
  );
};

export default ChatAssistantLogo;