import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import "./style/App.css";
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

  return <div>{children}</div>;
};

export default AppLayout;
