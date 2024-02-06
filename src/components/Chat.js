import React, { useState, useEffect, useRef } from 'react';
import Input from './Input';
import './Chat.css';

const Chat = () => {
    const initialMessages = [
        { text: "This chatbot is intended for informational purposes related to kahramaa Services. Any information you provide will be logged and stored for quality and training purposes. Please do not provide any personal information or confidential data when using this chatbot.", author: 'alert' },
        { text: "Hey, how can I help you?", author: 'bot' }
      ];
  const [messages, setMessages] = useState([initialMessages]);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  const onSendMessage = (message) => {
    setMessages([...messages, { text: message, author: 'user' }]);
    setIsBotTyping(true);
    setTimeout(() => {
      const botMessage = "Here's a response from the bot.";
      setMessages([...messages, { text: message, author: 'user' }, { text: botMessage, author: 'bot' }]);
      setIsBotTyping(false);
    }, 2000);
  };

  useEffect(() => {
    
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="chat-container">
  <div className="messages-container" ref={messagesEndRef}>
    {messages.map((msg, index) => (
      <div key={index} className={`message ${msg.author}`}>
        {msg.text}
      </div>
    ))}
    {isBotTyping && <div className="typing-indicator"><span></span><span></span><span></span></div>}
  </div>
  <Input onSendMessage={onSendMessage} />
</div>
  );
};

export default Chat;