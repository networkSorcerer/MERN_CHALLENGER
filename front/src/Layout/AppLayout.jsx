import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, Outlet } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

// Icons

// CSS
// import "./style/App.css";

const drawerWidth = 240;

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/* 상단 툴바 */}
      <Toolbar sx={{ minHeight: 56, px: 0 }}>
        <IconButton
          color="inherit"
          edge="start"
          onClick={toggleDrawer}
          sx={{ ml: 0 }} // 왼쪽 마진 0
          aria-label="menu"
        >
          ☰
        </IconButton>
      </Toolbar>

      {/* 좌측 사이드바 */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{
          keepMounted: true, // 모바일 성능 최적화
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#213547",
          },
        }}
      >
        <Toolbar />
        <List>
          <ListItem component="button">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem component="button">
            <ListItemIcon></ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
      </Drawer>

      {/* 메인 콘텐츠 영역 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "600px",
        }}
      >
        <Toolbar />
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
