import { Chip, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { baseTheme } from "../Estilos/Estilos";

import { useEffect, useState } from "react";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const ProductosNav = ({ children }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "categories");
    getDocs(itemsCollection).then((res) => {
      let arrayCategories = res.docs.map((category) => {
        return {
          ...category.data(),
          id: category.id,
        };
      });
      setCategoryList(arrayCategories);
    });
  }, []);

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
      <ul>
        {categoryList?.map((category) => {
          return (
            <Link to={category.path} style={{ textDecoration: "none" }}>
              <Chip
                label={category.title}
                sx={{
                  backgroundColor: baseTheme.palette.primary.main,
                  marginRight: "3px",
                  marginLeft: "3px",
                  color: "white",
                  "&:hover": {
                    backgroundColor: baseTheme.palette.primary.dark,
                  },
                }}
              />
            </Link>
          );
        })}
      </ul>
      {children}
    </Container>
  );
};

export default ProductosNav;
