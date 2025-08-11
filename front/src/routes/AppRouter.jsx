import React from "react";
import { Route, Routes } from "react-router";
import LoginPage from "../page/LoginPage/LoginPage.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
