import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';


export const ContentContainer = styled(Box)(({ theme }) => ({
  alignItems: "center",
  width: "90%",
  backgroundColor: theme.palette.background.default,
  color: theme.palette.text.default,
}));
