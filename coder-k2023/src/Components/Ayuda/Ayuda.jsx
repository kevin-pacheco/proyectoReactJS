import React from "react";
import { Box, Container, Typography } from "@mui/material";

const Ayuda = () => {
  return (
    <Box sx={{ marginTop: "40px" }}>
      <Container>
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
          AYUDA
        </Typography>
        <Typography variant="h5" component="h2" sx={{ marginBottom: "10px" }}>
          Preguntas frecuentes
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          • ¿Cuánto tiempo tardará mi pedido en llegar?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          El tiempo de entrega dependerá del método de envío que selecciones y
          de tu ubicación. Por lo general, los tiempos de entrega oscilan entre
          2 y 10 días hábiles.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          • ¿Qué métodos de pago aceptan?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Aceptamos tarjetas de crédito y débito de todas las principales redes
          (Visa, Mastercard, American Express, etc.) así como también PayPal,
          Apple Pay, Google Pay, y más.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          • ¿Puedo devolver un producto si no estoy satisfecho con mi compra?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Sí, aceptamos devoluciones en un plazo de 30 días a partir de la fecha
          de compra. Por favor, consulta nuestra política de devoluciones para
          obtener más información sobre los términos y condiciones.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          • ¿Ofrecen garantía en los productos que venden?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Sí, ofrecemos garantía en todos nuestros productos. Por favor,
          consulta la descripción del producto para obtener información sobre la
          garantía específica de cada artículo.
        </Typography>

        <Typography variant="body1" sx={{ marginBottom: "20px" }}>
          • ¿Puedo cancelar mi pedido una vez que lo haya realizado?
        </Typography>
        <Typography variant="body2" sx={{ marginBottom: "20px" }}>
          Sí, puedes cancelar tu pedido en cualquier momento antes de que sea
          enviado. Por favor, ponte en contacto con nuestro equipo de soporte al
          cliente para obtener ayuda con la cancelación de tu pedido.
        </Typography>
      </Container>
    </Box>
  );
};

export default Ayuda;
