//import Footer from "./Components/Footer/Footer";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import { NavBar } from "./Components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { ThemeProvider } from "@mui/material";
import { useState } from "react";
import { baseTheme } from "./Components/Estilos/Estilos";
import ProductosNav from "./Components/ProductosNav/ProductosNav";

function App() {
  const [theme] = useState(baseTheme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <ProductosNav />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer />}
          />
          <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
