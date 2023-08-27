import React from 'react';
import "./Sidebar.css";
import { Button } from '@mui/material';

export default function Sidebar({ onHotelClick }) {
  const hotelNames = ["AdiGas", "RotiGhar", "Punjabi Rasoi", "Udupi"];

  return (
    <>
      <div className='container'>
        {hotelNames.map((hotelName, index) => (
          <Button
            key={index}
            variant="text"
            onClick={() => onHotelClick(hotelName)}
          >
            {hotelName}
          </Button>
        ))}
      </div>
    </>
  );
}
