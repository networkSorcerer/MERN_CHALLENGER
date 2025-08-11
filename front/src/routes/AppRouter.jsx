import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../page/LoginPage/LoginPage.jsx";
import LandingPage from "../page/LandingPage/LandingPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<LandingPage />} />
    </Routes>
  );
};

export default AppRouter;
