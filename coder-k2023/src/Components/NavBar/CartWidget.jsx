import AddShoppingCart from "@mui/icons-material/AddShoppingCart";
import { Badge, IconButton } from "@mui/material";
import React from "react";

export const CartWidget = () => {
  return (
    <IconButton size="large" aria-label="show 4 new mails" color="secondary">
      <Badge badgeContent={0} color="error">
        <AddShoppingCart />
      </Badge>
    </IconButton>
  );
};
