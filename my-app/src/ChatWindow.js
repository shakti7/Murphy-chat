import React from 'react';

function ChatWindow(props) {
    const { messages, isDarkMode } = props;
    return (
        <div className={`chat-window p-5 h-[60vh] overflow-y-auto ${isDarkMode ? 'bg-gray-800 text-yellow-600' : 'bg-gray-100 text-gray-900'}`}>
            {messages.map((message, index) =>
                <div key={index} className={`my-2 p-2 rounded-lg ${message.fromBot ? (isDarkMode ? "bg-gray-800 text-yellow-600" : "bg-gray-100 text-gray-900") : (isDarkMode ? "bg-yellow-600 text-gray-800" : "bg-gray-900 text-gray-100")}`}>
                    <p>{message.message}</p>
                </div>
            )}
        </div>
    );
}

export default ChatWindow;
