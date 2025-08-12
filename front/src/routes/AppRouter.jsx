import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../page/LoginPage/LoginPage.jsx";
import LandingPage from "../page/LandingPage/LandingPage.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/main" element={<LandingPage />} />
      <Route element={<PrivateRoute permissionLevel="member" />}>
        {" "}
        <Route path="/main" element={<LandingPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
