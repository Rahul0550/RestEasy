import {
    AppBar,
    Avatar,
    Box,
    Container,
    IconButton,
    Toolbar,
    Typography,
  } from "@mui/material";
  import React from "react";
  import FoodBankIcon from "@mui/icons-material/FoodBank";
  import { useNavigate } from "react-router-dom";

export default function NavBar2() {

    
  const navigate = useNavigate();


  return (
    <>
      <AppBar position="static" color="inherit" sx={{ height: 60 }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography onClick={() => navigate("/")}>
              <FoodBankIcon />
              RestEasy
            </Typography>

            <Box sx={{ display: "flex", gap: "20px" }}>
              

              <IconButton size="small" sx={{ marginLeft: "auto" }}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                ></Avatar>

                
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}
