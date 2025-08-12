import React from "react";
import { Route, Routes } from "react-router";
import MainPage from "../page/MainPage/MainPage.jsx";
import LandingPage from "../page/LandingPage/LandingPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route element={<PrivateRoute permissionLevel="member" />}>
        {" "}
        <Route path="/main" element={<LandingPage />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/main" element={<LandingPage />} />
        <Route path="/main" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
