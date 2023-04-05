import { useParams } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { Box, Container, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const { agregarAlCarrito, getQuantityById } = useContext(CartContext);

  const [productSelected, setProductSelected] = useState({});

  useEffect(() => {
    const itemsCollection = collection(db, "products");
    const referencia = doc(itemsCollection, id);
    getDoc(referencia).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
    });
  }, [id]);

  //const productSelected = products.find((element) => element.id === Number(id));

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    agregarAlCarrito(producto);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  let quantity = getQuantityById(Number(id));

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
        <ItemCount
          stock={productSelected.stock}
          onAdd={onAdd}
          initial={quantity}
        />
        <Typography variant="body1" align="justify" sx={{ mt: 4 }}>
          {productSelected.description}
        </Typography>
      </Container>
    </Box>
  );
};

export default ItemDetailContainer;
