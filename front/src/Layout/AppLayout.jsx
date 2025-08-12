import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import loginWithToken from "../features/user/userSlice";
const drawerWidth = 240;

const AppLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => setOpen(!open);
  const dispatch = useDispatch();
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(loginWithToken());
    }
  }, []);
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

          <Typography variant="h6" noWrap component="div">
            Challenger{" "}
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
        <LoginPage />
      </Drawer>

      {/* 메인 콘텐츠 영역 */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          minHeight: "600px",
          mt: "64px", // AppBar 높이만큼 margin-top 줌 (기본 64px)
        }}
      >
        {children}
        <Outlet />
      </Box>
    </Box>
  );
};

export default AppLayout;
