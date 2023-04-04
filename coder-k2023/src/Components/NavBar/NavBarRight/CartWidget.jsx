import { AddShoppingCart, Close, Delete } from "@mui/icons-material";
import { Badge, IconButton, Modal, Box, Typography } from "@mui/material";

import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import "./CartWidget.css";

export const CartWidget = () => {
  const { cart, vaciarCarrito, getTotalQuantity, getTotalPrice } =
    useContext(CartContext);

  const total = getTotalQuantity();
  const preciototal = getTotalPrice();

  const [isOpen, setIsOpen] = useState(false);

  const mostrarCarrito = () => {
    setIsOpen(true);
  };

  const cerrarCarrito = () => {
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="secondary"
        onClick={mostrarCarrito}
      >
        <Badge badgeContent={total} color="error">
          <AddShoppingCart />
        </Badge>
      </IconButton>
      <Modal
        open={isOpen}
        onClose={cerrarCarrito}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "25%",
            backgroundColor: "#fff",
            padding: "1rem",
            height: "100vh",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton color="primary" onClick={cerrarCarrito}>
              <Close />
            </IconButton>
          </div>
          <Typography
            sx={{
              color: "#558b2f",
              textAlign: "center",
              textTransform: "uppercase",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Carrito
          </Typography>

          {cart.length === 0 ? (
            <p>No hay elementos en el carrito</p>
          ) : (
            <div>
              {cart.map((elemento) => {
                return (
                  <Box
                    key={elemento.id}
                    display="flex"
                    alignItems="center"
                    mb={2}
                  >
                    <Box mr={2}>
                      <Typography variant="h6" sx={{ color: "#000" }}>
                        {elemento.title}
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        color="textSecondary"
                        sx={{ color: "#7cb342" }}
                      >
                        Cantidad: {elemento.quantity}
                      </Typography>
                    </Box>
                    <Box flexGrow={1} />
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      sx={{ color: "#7cb342" }}
                    >
                      ${elemento.price}
                    </Typography>
                  </Box>
                );
              })}

              <Typography
                variant="h5"
                gutterBottom
                sx={{ color: "#558b2f", textAlign: "center" }}
              >
                TOTAL: ${preciototal}
              </Typography>

              <IconButton
                className="rectangular-shadow-button"
                color="error"
                onClick={vaciarCarrito}
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                }}
              >
                <Delete />
                Vaciar carrito
              </IconButton>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
