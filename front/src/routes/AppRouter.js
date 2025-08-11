import React from "react";
import { Routes } from "react-router";
import LoginPage from "../page/LoginPage/LoginPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
    </Routes>
  );
};

export default AppRouter;
