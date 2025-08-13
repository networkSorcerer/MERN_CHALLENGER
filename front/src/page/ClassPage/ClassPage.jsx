import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ContentContainer } from "../../Layout/style/GlobalStyle";
import NewClass from "./component/NewClass";
const ClassPage = () => {
  const [regClass, setRegClass] = useState(false);

  const toggleCenter = () => {
    setRegClass((prev) => !prev); // true ↔ false 반전
  };

  return (
    <>
      <ContentContainer>
        <Typography variant="h5">수업 관리</Typography>
        <Button variant="contained" onClick={toggleCenter}>
          {regClass ? "리스트" : "새 강의"}
        </Button>
      </ContentContainer>
      <ContentContainer>{regClass && <NewClass />}</ContentContainer>
    </>
  );
};

export default ClassPage;
