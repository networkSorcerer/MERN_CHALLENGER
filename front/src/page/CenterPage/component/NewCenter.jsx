import React, { useState } from "react";
import { Typography, TextField } from "@mui/material";
import { SubContainer } from "../../../Layout/style/GlobalStyle"; // export 방식 확인
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addCenter } from "../../../features/center/centerSlice";
const NewCenter = () => {
  const dispatch = useDispatch();

  const [centerName, setCenterName] = useState("");
  const [centerLocation, setCenterLocation] = useState("");
  const [master, setMaster] = useState("");
  const RegCenter = () => {
    dispatch(addCenter({ centerName, centerLocation, master }));
  };
  return (
    <SubContainer>
      <Typography>체육관 이름</Typography>
      <TextField
        variant="outlined"
        value={centerName}
        onChange={(e) => setCenterName(e.target.value)}
      />

      <Typography>장소</Typography>
      <TextField
        variant="outlined"
        value={centerLocation}
        onChange={(e) => setCenterLocation(e.target.value)}
      />

      <Typography>관장님</Typography>
      <TextField
        variant="outlined"
        value={master}
        onChange={(e) => setMaster(e.target.value)}
      />
      <Button onClick={() => RegCenter()}>등록</Button>
    </SubContainer>
  );
};

export default NewCenter;
