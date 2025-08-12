import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const ContentContainer = styled(Box)(({ theme }) => ({
  marginTop: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
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
  width: 240, // 고정 너비 (사이드바 일반적 너비)
  height: "100vh", // 화면 전체 높이
  backgroundColor: theme.palette.background.default, // 테마 배경색 사용
  padding: theme.spacing(2), // 기본 패딩
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  // 스크롤 가능하도록
  overflowY: "auto",

  // 반응형 예: 화면 작아지면 너비 줄이기
  [theme.breakpoints.down("sm")]: {
    width: 200,
  },
}));

export const MainContainer = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
  flexWrap: "wrap", // 여러 아이템이 줄바꿈 되도록
  justifyContent: "center", // 가로 가운데 정렬
  gap: theme.spacing(3), // 아이템 간격

  padding: theme.spacing(4),
}));

export const WideCard = styled(Box)(({ theme }) => ({
  flex: "1 1 800px", // 기본 너비 800px, 화면 좁으면 줄어듬
  maxWidth: "800px", // 최대 너비 800px
  minWidth: "300px", // 최소 너비 300px (조절 가능)
  minHeight: "100px",
  alignItems: "center",

  backgroundColor: theme.palette.background.container,
  borderRadius: theme.shape.borderRadius * 2,
  boxShadow: theme.shadows[3],
  padding: theme.spacing(3),

  display: "flex",
  color: "black",
  flexDirection: "column",
  justifyContent: "center",
}));
