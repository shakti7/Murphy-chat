// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import ChatPage from './ChatPage';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

function App() {
    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <LandingPage />;
    }

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/chat" />} exact />
                <Route path="/chat" element={<ChatPage />} />
            </Routes>
        </Router>
    );
}

export default App;
