"use client"

import React, { useEffect, useRef } from 'react';// Import your CSS file for styling

import card from './assets/card.jpeg';
import card1 from './assets/Banner.jpg';
import card2 from './assets/card2.jpeg';
import card3 from './assets/card3.jpeg';
import card4 from './assets/card4.jpeg';
import card5 from './assets/card5.jpeg';
import card6 from './assets/card6.jpeg';
import Image from 'next/image';
import Quicktransfer from './Quicktransfer';
import Analysis from './Analysis';

const Dashboard = () => {
  const images = [
    card,
    card1,
    card2,
    card3,
    card4,
    card5,
    card6
  ];
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      let scrollAmount = 0;
      const scrollIncrement = 2; // Adjust scroll speed as needed
      const scrollDelay = 50; // Adjust scroll delay (ms) as needed

      const scrollImages = () => {
        scrollAmount += scrollIncrement;
        container.scrollLeft = scrollAmount;

        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0; // Reset scroll to start
        }
      };

      const interval = setInterval(scrollImages, scrollDelay);

      return () => {
        clearInterval(interval); // Clean up interval on component unmount
      };
    }
  }, []);

  return (
    <div className="image-scroller">
      <div className="quick-transfer">
        <Quicktransfer/>
      </div>
      <div className='Title'>Special Offers</div>
       <div ref={scrollContainerRef} className="scroll-container">
        {images.map((image, index) => (
          <div key={index} className="scroll-item">
            <Image src={image} alt={`Card ${index + 1}`} className='img-scroller' />
          </div>
        ))}
      </div>
      <div className="analysis">
      <Analysis/>
      </div>
      
    </div>
  );
};

export default Dashboard;
