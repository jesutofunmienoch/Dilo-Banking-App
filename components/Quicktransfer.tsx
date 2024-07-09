"use client"
import React from 'react'

import bill from './assets/bill.jpeg';
import send from './assets/transfer.jpeg';
import airtime from './assets/card.jpeg';
import forex from './assets/forex.jpeg';
import Image from 'next/image';

const Quicktransfer = () => {
    
  const transfer = [
    { src: send, title: 'Transfer' },
  { src: bill, title: 'Pay Bills' },
  { src: airtime, title: 'Airtime' },
  { src: forex, title: 'FX Exchange' },
  ];

  return (
    <div className="transfer">
      <div className='Title'>Quick Transfer</div>
       <div className="transfer-container">
        {transfer.map((image, index) => (
          <div key={index} className="imageWrapper">
            <Image src={image.src} alt={`Card ${index + 1}`} className='transfers' />
            <div className="imageTitle">{image.title}</div>
          </div>
        ))}
      </div>
      </div>
  )
}

export default Quicktransfer