import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Teacher from './Teacher';
import Student from './Student';
import AboutUs from './AboutUs';
import Home from './Home';
import './App.css';

function App() {
  const tableData = [
    { id: 1, name: 'Alice', role: 'Student' },
    { id: 2, name: 'Bob', role: 'Teacher' },
    { id: 3, name: 'Charlie', role: 'Student' },
    { id: 4, name: 'David', role: 'Teacher' },
  ];

  return (
    <div>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/teacher">Teacher</Link> |{" "}
        <Link to="/student">Student</Link> |{" "}
        <Link to="/about">About Us</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home data={tableData} />} />
        <Route path="/teacher" element={<Teacher data={tableData} />} />
        <Route path="/student" element={<Student data={tableData} />} />
        <Route path="/about" element={<AboutUs data={tableData} />} />
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </div>
  );
}

export default App;
