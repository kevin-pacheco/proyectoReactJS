import { useState } from "react";
import { Box, Button, IconButton, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    }
  };

  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 6 }}>
        <IconButton onClick={restar} aria-label="Restar">
          <RemoveIcon />
        </IconButton>
        <Typography variant="h6">{contador}</Typography>
        <IconButton
          onClick={sumar}
          disabled={contador >= stock}
          aria-label="Sumar"
        >
          <AddIcon />
        </IconButton>
      </Box>
      <Box sx={{ mt: 2 }}>
        <Button
          variant="contained"
          onClick={() => onAdd(contador)}
          disabled={stock === 0}
        >
          <div style={{ color: "white" }}>Agregar al carrito</div>
        </Button>
      </Box>
    </Box>
  );
};

export default ItemCount;
