import { createTheme } from "@mui/material/styles";

export const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#7cb342",
      light: "#96c267",
      dark: "#558b2f", // nuevo color dark
    },
    secondary: {
      main: "#f4ff81",
      light: "#ffffa3",
      dark: "#b2b262",
    },
  },
});
