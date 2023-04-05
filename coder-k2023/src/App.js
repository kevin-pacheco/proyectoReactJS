//import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { baseTheme } from "./Components/Estilos/Estilos";
import ProductosNav from "./Components/ProductosNav/ProductosNav";
import CartContextProvider from "./context/CartContext";
import { FormCheckout } from "./Components/FormCheckout/FormCheckout";
import Contacto from "./Components/Contacto/Contacto";
import Ayuda from "./Components/Ayuda/Ayuda";

function App() {
  const [theme] = useState(baseTheme);
  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route
              path="/"
              element={
                <div>
                  <ProductosNav /> <ItemListContainer />
                </div>
              }
            />
            <Route
              path="/category/:categoryName"
              element={
                <div>
                  <ProductosNav /> <ItemListContainer />
                </div>
              }
            />
            <Route
              path="/itemDetail/:id"
              element={
                <div>
                  <ProductosNav />
                  <ItemDetailContainer />
                </div>
              }
            />

            <Route path="/contacto" element={<Contacto />} />
            <Route path="/ayuda" element={<Ayuda />} />

            <Route path="/checkOut" element={<FormCheckout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ThemeProvider>
  );
}

export default App;
