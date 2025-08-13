import React, { useState } from "react";
import {
  Typography,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { SubContainer } from "../../../Layout/style/GlobalStyle";
import { useDispatch } from "react-redux";
import { addClass } from "../../../features/class/classSlice";

const NewClass = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [master, setMaster] = useState("");
  const [trainDate, setTrainDate] = useState("");
  const [category, setCategory] = useState(""); // 선택용 state

  const RegClass = () => {
    dispatch(
      addClass({
        master,
        trainDate,
        title,
        content,
        category, // 선택된 카테고리
      })
    );
  };

  return (
    <SubContainer>
      <FormControl fullWidth>
        <InputLabel id="category-label" sx={{ color: "white" }}>
          카테고리
        </InputLabel>
        <Select
          labelId="category-label"
          value={category}
          label="카테고리"
          onChange={(e) => setCategory(e.target.value)}
          sx={{
            color: "white", // 선택 텍스트 색상
            ".MuiOutlinedInput-notchedOutline": { borderColor: "white" }, // 테두리 색상
            "&:hover .MuiOutlinedInput-notchedOutline": {
              borderColor: "white",
            },
            ".MuiSvgIcon-root": { color: "white" }, // 드롭다운 화살표 색상
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#424242", // 드롭다운 배경 어둡게
                "& .MuiMenuItem-root": {
                  color: "white", // 옵션 글자 흰색
                  "&.Mui-selected": {
                    backgroundColor: "#616161", // 선택된 옵션 배경 조금 밝게
                  },
                  "&:hover": {
                    backgroundColor: "#555555", // 마우스 오버 배경
                  },
                },
              },
            },
          }}
        >
          <MenuItem value="submission">서브미션</MenuItem>
          <MenuItem value="guardpass">가드패스</MenuItem>
          <MenuItem value="back">백컨트롤</MenuItem>
          <MenuItem value="takedown">테이크다운</MenuItem>
        </Select>
      </FormControl>

      <TextField
        variant="outlined"
        type="date"
        value={trainDate}
        onChange={(e) => setTrainDate(e.target.value)}
      />

      <Typography>제목</Typography>
      <TextField
        variant="outlined"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <Typography>수업내용</Typography>
      <TextField
        variant="outlined"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <Typography>사범님</Typography>
      <TextField
        variant="outlined"
        value={master}
        onChange={(e) => setMaster(e.target.value)}
      />

      <Button onClick={RegClass}>등록</Button>
    </SubContainer>
  );
};

export default NewClass;
