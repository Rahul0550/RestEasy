import React, { useState } from "react";
import hotelsData from "../hotels.json";
import { Button } from "@mui/material";

export default function Content({selectedHotel }) {
  const [cartTotal, setCartTotal] = useState(0); // State to store cart total

  const selectedHotelData = hotelsData.hotels.find(
    (hotel) => hotel.name === selectedHotel
  );

  const handleAddToCart = (cost) => {
    setCartTotal(cartTotal + cost);
    document.getElementById("total").innerHTML = cartTotal;
  };

  return (
    <>
      <h2>Menu</h2>
      <ul style={{ listStyle: "none", display: "flex", flexWrap: "wrap" }}>
        {selectedHotelData &&
          selectedHotelData.menu.map((item, i) => (
            <li key={i} style={{ margin: "5px 10px", flex: "0 0 25%" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ width: "100px", height: "80px", marginBottom: "5px" }}
                />
                <div>
                  {item.name}
                </div>
                <div style={{color:"dodgerblue", fontWeight:"bold"}}>
                  ${item.cost}
                </div>
                <Button variant="contained" onClick={() => handleAddToCart(item.cost)}>Add to cart</Button>
              </div>
            </li>
          ))}
      </ul>
    </>
  );
}

















// import React from "react";
// import hotelsData from "../hotels.json";
// import { Button } from "@mui/material";

// export default function Content({ selectedHotel }) {
//   // const [cost, setCost] = useState(0)
//   const selectedHotelData = hotelsData.hotels.find(
//     (hotel) => hotel.name === selectedHotel
//   );

//   return (
//     <>
//       {/* <h2>This will display menu</h2> */}
//       <ul style={{listStyle:"none"}}>
//         {selectedHotelData &&
//           selectedHotelData.menu.map((item, i) => (
//             <li key={i} style={{margin:"5px 10px"}}>
//               <div style={{ display: "flex", alignItems: "center" }}>
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   style={{ width: "100px", height: "80px", marginRight: "10px" }}
//                 /><br/>
//                 {item.name}
//                 <hr/>
//                 {item.cost}
//                 <Button variant="text" >Add to cart</Button>
//               </div>
//             </li>
//           ))}
//       </ul>
//     </>
//   );
// }
