import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    background: {
      default: "#242424", // 배경색 설정
      container: "#2d2f3bff",
    },
    text: {
      primary: "#fff", // 기본 텍스트 색상
    },
    primary: {
      main: "#f1e8e8ff", // 빨간 계열 (예: 제목, 버튼 기본색)
    },
  },
  typography: {
    h6: {
      color: "#e81616ff", // h1 제목 색깔을 빨간 계열로 지정
    },
    h1: {
      color: "#fff",
    },
    h3: {
      color: "#fff",
    },
  },
});

export default theme;
