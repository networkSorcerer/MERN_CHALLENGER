import React from "react";
import { ContentContainer } from "../../Layout/style/GlobalStyle";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useEffect } from "react";

const MainPage = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    if (user) {
      navigate("/main");
    }
    console.log("usersersersers", user);
  }, [user, navigate]);
  return (
    <ContentContainer>
      <Typography variant="h1">WELCOME TO CHALLENGER</Typography>
    </ContentContainer>
  );
};

export default MainPage;
