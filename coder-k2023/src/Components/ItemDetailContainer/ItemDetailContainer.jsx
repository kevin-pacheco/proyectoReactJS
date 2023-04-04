import { useParams } from "react-router-dom";
import { products } from "../../productsMock";
import ItemCount from "../ItemCount/ItemCount";
import { Box, Container, Typography } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { cart, agregarAlCarrito } = useContext(CartContext);

  const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h5" align="center" gutterBottom>
          {productSelected.title}
        </Typography>
        <img
          src={productSelected.img}
          alt={productSelected.title}
          style={{ display: "block", margin: "auto", maxWidth: "65%" }}
        />
        <ItemCount stock={productSelected.stock} onAdd={onAdd} />
        <Typography variant="body1" align="justify" sx={{ mt: 4 }}>
          {productSelected.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default ItemDetailContainer;
