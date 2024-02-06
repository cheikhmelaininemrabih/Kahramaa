// Input.js
import React, { useState } from 'react';
import './Styles/Input.css'; // Make sure this is the correct path to your styles

const Input = ({ onSendMessage }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="input-area">
      
      <input
        type="text"
        placeholder="Type your message here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSend} className="send-button">
       
        <i id="chat-icon" className="fa fa-fw fa-send"></i>
        <span>SUBMIT</span>
      </button>
    </div>
  );
};

export default Input;
