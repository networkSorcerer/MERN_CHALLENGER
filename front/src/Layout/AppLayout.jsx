import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";

const AppLayout = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (token) {
      dispatch(loginWithToken());
    }
  }, []);

  return <div></div>;
};

export default AppLayout;
