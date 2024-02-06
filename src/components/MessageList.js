// MessageList.js
import React from 'react';
import './Styles/Messagelist.css';
import DynamicBotMessage from './BotMessage.js'; // Import the new component

const MessageList = ({ messages }) => {
    return (
        <div id="message-list" className="message-list">
            {messages.map((message, index) => (
                message.from === 'bot' ? 
                <DynamicBotMessage key={index} text={message.text} /> : 
                <div key={index} className={`message user-message`}>{message.text}</div>
            ))}
        </div>
    );
};

export default MessageList;
