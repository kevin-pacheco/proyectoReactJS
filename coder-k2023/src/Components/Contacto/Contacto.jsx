import React from "react";
import { Container, Typography } from "@mui/material";

const Contacto = () => {
  return (
    <Container sx={{ marginTop: "40px" }}>
      <Typography
        variant="h4"
        component="h1"
        align="center"
        sx={{
          marginBottom: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          fontSize: "3rem",
        }}
      >
        CONTACTO
      </Typography>

      <Typography
        variant="h5"
        component="h2"
        sx={{ marginBottom: "10px", fontWeight: "bold" }}
      >
        Byte STORE
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "20px" }}>
        Somos una tienda online especializada en hardware de computadoras.
        Ofrecemos una amplia variedad de productos de las mejores marcas, al
        mejor precio y con envíos a todo el mundo. Desde procesadores de última
        generación hasta tarjetas gráficas de alta gama, en Byte STORE
        encontrarás todo lo que necesitas para armar o mejorar tu PC.
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Dirección: Av. Inventada 123, Ciudad Imaginaria, País Fantasía
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Teléfono: +1 (123) 456-7890
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: "10px" }}>
        Correo electrónico: info@bytestore.com
      </Typography>
    </Container>
  );
};

export default Contacto;
