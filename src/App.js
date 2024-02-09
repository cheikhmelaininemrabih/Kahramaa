// App.js
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import ChatAssistantLogo from './components/ChatAssistantLogo';
import './App.css';

const App = () => {
  const [showChat, setShowChat] = useState(false); // This state will control the visibility of the ChatWindow

  // This function will toggle the visibility of the chat window
  const toggleChat = () => {
    setShowChat(!showChat);
  };

  return (
    <div className="app-container">
      <ChatAssistantLogo onToggleChat={toggleChat} /> {/* Logo is always visible */}
      {showChat && <ChatWindow onClose={toggleChat} />} {/* ChatWindow visibility controlled by showChat */}
    </div>
  );
};

export default App;
