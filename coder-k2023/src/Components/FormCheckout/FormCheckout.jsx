import { useState, useContext } from "react";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { CartContext } from "../../context/CartContext";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

import "./FormCheckout.css";
import { baseTheme } from "../Estilos/Estilos";

export const FormCheckout = () => {
  const { cart, vaciarCarrito, getTotalPrice } = useContext(CartContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [orderId, setOrderId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        vaciarCarrito();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  if (orderId) {
    return (
      <div className="thank-you">
        <h2>Gracias por su compra</h2>
        <h4>El comprobante es : {orderId}</h4>
      </div>
    );
  }
  return (
    <div className="checkout-container">
      <div className="checkout-form-container">
        <form onSubmit={handleSubmit} className="checkout-form">
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              textTransform: "uppercase",
              marginBottom: "20px",
              color: baseTheme.palette.primary.dark,
              "& strong": {
                color: baseTheme.palette.primary.dark,
              },
            }}
          >
            Registra tus datos para finalizar la compra
          </Typography>

          <TextField
            label="Nombre"
            variant="outlined"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
            className="checkout-input"
            sx={{ marginBottom: "10px", marginTop: "10px" }}
          />
          <TextField
            label="Email"
            variant="outlined"
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
            className="checkout-input"
            sx={{ marginBottom: "10px", marginTop: "10px" }}
          />
          <TextField
            label="Telefono"
            variant="outlined"
            value={userData.phone}
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
            className="checkout-input"
            sx={{ marginBottom: "10px", marginTop: "10px" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: baseTheme.palette.primary.main,
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold",
              "&:hover": {
                backgroundColor: baseTheme.palette.primary.dark,
              },
              marginBottom: "10px",
              marginTop: "10px",
            }}
            className="checkout-button"
          >
            Comprar
          </Button>
        </form>
      </div>
    </div>
  );
};
