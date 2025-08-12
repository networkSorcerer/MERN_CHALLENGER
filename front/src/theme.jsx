import { createTheme } from "@mui/material";

 const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          background: {
            default: mode === "light" ? "#fff" : "#121212",
          },
          text: {
            primary: mode === "light" ? "#000" : "#fff",
          },
        },
        typography: {
          h1: {
            color: mode === "light" ? "#b71c1c" : "#ff7961", // 붉은 계열 예시
          },
        },
      }),
    [mode]
  );

export default theme;
