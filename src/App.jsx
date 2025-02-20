import React from 'react';
import { Routes, Route } from 'react-router-dom';
import useRedirect from './Tools/Redirects.jsx'; // ✅ Apply global redirects
import UserLogin from './Pages/UserLogin.jsx';
import Profile from './Pages/Profile.jsx';
import ProtectedRoute from './Components/ProtectedRoute.jsx';
import Home from './Pages/Home.jsx';

const App = () => {
    useRedirect(); // ✅ This ensures redirects work automatically

    return (
        <Routes>
            <Route path="/login" element={<UserLogin />} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/about" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
};

export default App;
