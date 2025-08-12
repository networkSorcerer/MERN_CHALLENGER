import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { Outlet } from "react-router-dom";

// MUI imports
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// MUI Icons
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";

// CSS
import "./style/App.css";

const drawerWidth = 240;

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  // useEffect(() => {
  //   const token = sessionStorage.getItem("token");
  //   if (token) {
  //     dispatch(loginWithToken());
  //   }
  // }, []);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Toolbar>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ mr: 2 }}
          aria-label="menu"
        />
      </Toolbar>

      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem component="button">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem component="button">
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "600px",
        }}
      >
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
