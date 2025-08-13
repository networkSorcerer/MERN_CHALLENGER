import React, { useState } from "react";
import SideMenu from "./component/SideMenu";
import Profile from "./component/Profile";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import { loginWithToken } from "../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import LoginPage from "../page/LoginPage/LoginPage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { ContentContainer } from "../Layout/style/GlobalStyle";
import { Link as RouterLink } from "react-router-dom";
const drawerWidth = 240;

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const token = sessionStorage.getItem("token");
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const toggleDrawer = () => setOpen(!open);
  const dispatch = useDispatch();
  useEffect(() => {
    if (token) {
      dispatch(loginWithToken());
    }
  }, []);
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);
  return (
    <Box sx={{ display: "flex" }}>
      {/* 상단 고정 AppBar */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          backgroundColor: "#242424",
        }}
      >
        <Toolbar sx={{ px: 1 }}>
          <IconButton
            edge="start"
            onClick={toggleDrawer}
            aria-label="menu"
            sx={{ mr: 2, color: "white" }}
          >
            ☰
          </IconButton>

          <Typography
            variant="h6"
            noWrap
            component={RouterLink}
            to="/main"
            sx={{
              cursor: "pointer",
              textDecoration: "none",
              color: "red",
            }}
          >
            Challenger
          </Typography>
        </Toolbar>
      </AppBar>

      {/* 좌측 Drawer */}
      <Drawer
        variant="temporary"
        open={open}
        onClose={toggleDrawer}
        ModalProps={{ keepMounted: true }}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#242424",
          },
        }}
      >
        <Toolbar />
        <Profile user={user} />
        <SideMenu user={user} />
        <LoginPage />
      </Drawer>

      {/* 메인 콘텐츠 영역 */}
      <ContentContainer>
        {children}
        <Outlet />
      </ContentContainer>
    </Box>
  );
};

export default AppLayout;
