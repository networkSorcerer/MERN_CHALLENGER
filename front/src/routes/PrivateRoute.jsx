import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = ({ permissionLevel }) => {
  const user = useSelector((state) => state.user.user);
  const isAuthenticated =
    user?.auth === permissionLevel || user?.auth === "admin";

  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
