import React from 'react';
import HomeCard from './HomeCard';  // ✅ correct
import './Home.css'; // For layout styling

const HomeCardSection = () => {
  const cards = [
    {
      name:"Restaurant Home",
      img:"/1-1-1.png"
    },
     {
      name:"Burger Home",
      img:"/home-2.png"
    },
     {
      name:9999,
      img:"/home-3.jpg"
    },
  ]
  return (
    <>
    <div className="home-card-section">
      {
        cards.map((data,index)=>( <HomeCard key={index} image={data.img} title={data.name} />))
      }
    </div>
    <div className='whiteContent'>

    </div>
    <div className='whiteContent'></div>
    </>
  );
};

export default HomeCardSection;
