import { useState } from "react";

const ItemCount = (stock, initial, onAdd) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < 5) setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) setContador(contador - 1);
  };

  return <div>ItemCount</div>;
};

export default ItemCount;
