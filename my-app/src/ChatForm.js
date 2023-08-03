// ChatForm.js
import React from 'react';

function ChatForm(props) {
    return (
        <form onSubmit={props.handleSubmit} className="border-t-2 border-gray-700 p-6 flex justify-between">
            <input type="text" value={props.input} onChange={props.handleInput} className={`chat-input flex-grow mr-2 py-2 px-4 rounded-lg border-2 ${props.isDarkMode ? 'border-gray-700 bg-gray-700 text-gray-200' : 'border-gray-200 bg-white text-gray-800'} focus:outline-none focus:border-blue-500 transition duration-150`} />

            <button type="submit" className={`chat-submit ${props.isDarkMode ? 'bg-gray-800 hover:bg-gray-700 text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'} py-2 px-6 rounded-lg transition duration-150`}>Ask</button>
        </form>
    );
}

export default ChatForm;