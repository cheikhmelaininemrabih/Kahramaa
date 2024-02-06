// ChatAlert.js
import React from 'react';
import './Styles/Alert.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

const ChatAlert = () => {
  return (
    <div className="chat-alert">
      <div className="warning-message">
        <span>
        <FontAwesomeIcon icon={faExclamationCircle} className="icon" />
          This chatbot is intended for informational purposes related to kahramaa Services. Any information you provide will be logged and stored for quality and training purposes. Please do not provide any personal information or confidential data when using this chatbot.</span>
      </div>
    </div>
  );
};

export default ChatAlert;
