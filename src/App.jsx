import React from 'react';

const Chatbot = () => {
    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '400px' }}>
            <h2>Chatbot Interface</h2>
            <div style={{ marginBottom: '10px', height: '300px', overflowY: 'scroll', border: '1px solid #ccc', padding: '10px' }}>
                {/* Chat messages will go here */}
            </div>
            <input type="text" placeholder="Type a message..." style={{ width: '100%', padding: '10px' }} />
            <button style={{ padding: '10px', marginTop: '10px', cursor: 'pointer' }}>Send</button>
        </div>
    );
};

export default Chatbot;