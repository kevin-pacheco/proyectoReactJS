import { AddShoppingCart, Close, Delete } from "@mui/icons-material";
import {
  Badge,
  IconButton,
  Modal,
  Box,
  Typography,
  Button,
} from "@mui/material";

import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";

import "./CartWidget.css";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";

export const CartWidget = () => {
  const {
    cart,
    vaciarCarrito,
    getTotalQuantity,
    getTotalPrice,
    eliminarDelCarrito,
  } = useContext(CartContext);

  const clear = () => {
    cerrarCarrito();
    Swal.fire({
      title: "Estás seguro?",
      text: "Borrarás todo el carrito!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "VACIAR",
      cancelButtonText: "CANCELAR",
    }).then((result) => {
      if (result.isConfirmed) {
        vaciarCarrito();
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Carrito vaciado correctamente",
          showConfirmButton: false,
          timer: 2500,
        });
      }
    });
  };

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
            <Typography sx={{ fontWeight: "bold", textAlign: "center" }}>
              <p>No hay elementos en el carrito</p>
            </Typography>
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
                    <IconButton onClick={() => eliminarDelCarrito(elemento.id)}>
                      <Delete />
                    </IconButton>
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
              <Box display="flex" justifyContent="center" my={2}>
                <Link to="/checkOut">
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={cerrarCarrito}
                  >
                    Finalizar compra
                  </Button>
                </Link>
              </Box>

              <IconButton
                className="rectangular-shadow-button"
                color="error"
                onClick={clear}
                sx={{
                  position: "absolute",
                  bottom: "20px",
                  right: "20px",
                  borderRadius: 0,
                }}
              >
                <Delete sx={{ borderRadius: 0 }} />
                <Link to="/">Vaciar carrito</Link>
              </IconButton>
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};
