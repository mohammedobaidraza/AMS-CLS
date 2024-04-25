// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ContactForm from './components/Application';
import NavBar from './components/NavBar';
import AdminDashboard from './components/AdminDashboard'; // Rename to AdminPage if necessary
import Login from './components/Login';
import Register from './components/Register';
import SubmissionDetail from './components/SubmissionDetail'; // Rename to SubmissionDetails if necessary
import ProtectedRoute from './utils/ProtectedRoute';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<ContactForm />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    {/* Wrap the admin routes with ProtectedRoute */}
                    <Route element={<ProtectedRoute />}>
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/admin/submission/:id" element={<SubmissionDetail />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
