import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React, { useState } from "react";
import FoodBankIcon from "@mui/icons-material/FoodBank";
import { useNavigate } from "react-router-dom";

export default function NavBar1({cartTotal}) {
  const [menuAnchor, setMenuAnchor] = useState(null);
  
  const navigate = useNavigate();

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
  };

  return (
    <>
      {/* <h2>This is a navbar component</h2> */}
      <AppBar position="static" color="inherit" sx={{ height: 60 }}>
        <Container maxWidth="lg">
          <Toolbar
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <Typography onClick={() => navigate("/")}>
              <FoodBankIcon />
              RestEasy
            </Typography>

            <Box sx={{ display: "flex", gap: "20px", alignItems:"center" }}>
              {
                <>
                  <TextField
                    variant="outlined"
                    label="Search Hotels"
                    size="small"
                    sx={{ marginTop: "10px" }}
                    InputProps={{
                      endAdornment: (
                        <IconButton>
                          <SearchOutlinedIcon />
                        </IconButton>
                      ),
                    }}
                  />
                </>
              }
              <h2>Total:{cartTotal}</h2>
              <AddShoppingCartIcon sx={{ marginTop: "20px" }} />

              <IconButton size="small" sx={{ marginLeft: "auto" }}>
                <Avatar
                  sx={{ width: 32, height: 32 }}
                  onClick={handleMenuOpen}
                ></Avatar>

                <Menu
                  anchorEl={menuAnchor}
                  open={Boolean(menuAnchor)}
                  onClose={handleMenuClose}
                >
                  <MenuItem onClick={() => navigate("/login")}>
                    Sign In / Sign Up
                  </MenuItem>

                  <MenuItem onClick={() => navigate("/orders")}>
                    Orders
                  </MenuItem>
                </Menu>
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}
