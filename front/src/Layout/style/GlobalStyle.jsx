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
