import React, { useState } from "react";
import { Box, Toolbar, ThemeProvider } from "@mui/material";
import { baseTheme } from "../../Estilos/Estilos";
import { CartWidget } from "./CartWidget";

export default function UserItems() {
  const [theme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <CartWidget />
          </Box>
        </Toolbar>
      </Box>
    </ThemeProvider>
  );
}
