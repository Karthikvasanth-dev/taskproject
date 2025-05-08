import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Home from './Home';
import Teacher from './Teacher';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import About from './about';
import Student from './student';
import Profile from './profile';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* Navigation Links */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/teacher">Teacher</Link> | <Link to="/student">Student</Link>| <Link to="/profile">Profile</Link> | <Link to="/about">About Us</Link>
      </nav>

      {/* Routing */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teacher" element={<Teacher />} />
        <Route path="/about" element={<About />} />
        <Route path="/student" element={<Student />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
      
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
