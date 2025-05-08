import React from 'react';
import './index.css';
import Home from './Home';
//  const Data={
//  teacherName : "Vasanth",
//  age : 20,
//  };
const Profile = () => {
  return (
    <div className="page profile-page">
      <h1>Your Profileee</h1>
       <Home name="karthik" />
    </div>
  );
};

export default Profile;
