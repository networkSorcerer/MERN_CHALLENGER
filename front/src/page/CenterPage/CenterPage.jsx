import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ContentContainer } from "../../Layout/style/GlobalStyle";
import NewCenter from "./component/NewCenter";

const CenterPage = () => {
  const [regCenter, setRegCenter] = useState(false);

  const toggleCenter = () => {
    setRegCenter((prev) => !prev); // true ↔ false 반전
  };

  return (
    <>
      <ContentContainer>
        <Typography variant="h5">체육관 관리</Typography>
        <Button variant="contained" onClick={toggleCenter}>
          {regCenter ? "리스트" : "새 체육관"}
        </Button>
      </ContentContainer>
      <ContentContainer>{regCenter && <NewCenter />}</ContentContainer>
    </>
  );
};

export default CenterPage;
