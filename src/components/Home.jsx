import React, { useEffect, useState } from "react";
import NavBar1 from "./navbar/NavBar1";
import Sidebar from "./sidebar/Sidebar";
import { Box } from "@mui/material";
import Content from "./content/Content";
import axios from "axios";
// import hotelsData from './hotels.json';

export default function Home() {
  const [selectedHotel, setSelectedHotel] = useState("AdiGas");

  const handleHotelClick = (hotelName) => {
    setSelectedHotel(hotelName);
  };
  const getApi = async () => {
    axios
      .get("http://localhost:8210/form")
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {/* <h2>This is the home page</h2> */}
      <NavBar1 />

      <Box sx={{ display: "flex" }}>
        <Sidebar onHotelClick={handleHotelClick} />
        <Box sx={{ border: "2px solid black", width: "50%", marginLeft: "0" }}>
          <Content selectedHotel={selectedHotel} />
        </Box>
      </Box>
    </>
  );
}
