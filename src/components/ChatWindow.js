import React, { useState, useRef, useEffect } from 'react';
import MessageList from './MessageList';
import Input from './Input';
import ChatHeader from './ChatHeader';
import ChatAlert from './CharAlert'; // Ensure correct import
import BotMessage from './Message'; // Ensure correct import
import './Styles/Window.css';

const ChatWindow = ({ onClose }) => {
    const [messages, setMessages] = useState([]);
    const [botTyping, setBotTyping] = useState(false);
    const scrollRef = useRef(null);
    const sendBotResponse = () => {
      setBotTyping(false); // Stop showing the typing indicator
      const botMessageObject = { text: "Sorry, I am not programmed yet", from: 'bot' };
      setMessages(prevMessages => [...prevMessages, botMessageObject]);
  };

  const sendMessage = (newMessage) => {
      const messageObject = { text: newMessage, from: 'user' };
      setMessages(prevMessages => [...prevMessages, messageObject]);

      // Simulate bot typing
      setBotTyping(true);
      setTimeout(() => {
          sendBotResponse();
      }, 2000); // Wait 2 seconds to simulate typing
  };
    // Scroll to bottom every time messages update
    useEffect(() => {
        if (scrollRef.current) {
            scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-window">
            <ChatHeader onMinimize={onClose} />
            <div className="messages-container" ref={scrollRef}>
                <ChatAlert />
                <BotMessage />
                <MessageList messages={messages} />
            </div>
            <Input onSendMessage={sendMessage} />
        </div>
    );
};

export default ChatWindow;
