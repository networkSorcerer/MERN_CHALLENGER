import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContentContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "90%",
  maxWidth: 800, // 최대 넓이 제한
  minHeight: "100vh",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.primary,
  padding: theme.spacing(2),

  [theme.breakpoints.down("sm")]: {
    width: "95%", // 작은 화면에선 좀 더 꽉 채우기
    padding: theme.spacing(1),
  },
}));


export const SidebarContainer = styled(Box)(({ theme }) => ({
  width: 240,              // 고정 너비 (사이드바 일반적 너비)
  height: "100vh",         // 화면 전체 높이
  backgroundColor: theme.palette.background.default, // 테마 배경색 사용
  padding: theme.spacing(2), // 기본 패딩
  display: "flex",
  flexDirection: "column",
  // 스크롤 가능하도록
  overflowY: "auto",

  // 반응형 예: 화면 작아지면 너비 줄이기
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
}));