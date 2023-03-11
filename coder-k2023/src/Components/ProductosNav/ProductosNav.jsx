import { Chip, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { baseTheme } from "../Estilos/Estilos";

const ProductosNav = ({ children }) => {
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 2,
        marginTop: "30px", // ajustar según la altura del navbar

        zIndex: 1, // asegurar que el contenedor tenga un zIndex menor que el navbar
      }}
    >
      <Link to="/category/motherboard" style={{ textDecoration: "none" }}>
        <Chip
          label="Motherboards"
          sx={{
            backgroundColor: baseTheme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: baseTheme.palette.primary.dark,
            },
          }}
        />
      </Link>
      <Link to="/category/procesador" style={{ textDecoration: "none" }}>
        <Chip
          label="Procesadores"
          sx={{
            backgroundColor: baseTheme.palette.primary.main,
            color: "white",
            "&:hover": {
              backgroundColor: baseTheme.palette.primary.dark,
            },
          }}
        />
      </Link>
      {children}
    </Container>
  );
};

export default ProductosNav;
