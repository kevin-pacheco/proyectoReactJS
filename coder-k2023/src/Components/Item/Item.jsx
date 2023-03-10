import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";
import { ThemeProvider, Button } from "@mui/material";
import { useState } from "react";
import { baseTheme } from "../Estilos/Estilos";

const Item = ({ element }) => {
  const [theme] = useState(baseTheme);

  return (
    <Card>
      <CardBody boxSize="350">
        <Image
          maxHeight="250"
          src={element.img}
          alt="imgProduct"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{element.title}</Heading>
          <Text>{element.description}</Text>
          <ThemeProvider theme={theme}>
            <Text color="primary" fontSize="2xl">
              ${element.price}
            </Text>
          </ThemeProvider>
        </Stack>
      </CardBody>
      <Divider />
      {/* <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="primary">
            Ver detalle
          </Button>
        </Link> */}
      <CardFooter>
        <ButtonGroup spacing="6.0rem">
          <ThemeProvider theme={theme}>
            <Button variant="contained" color="primary">
              <Text color="white" fontSize="2xl">
                Details
              </Text>
            </Button>

            <Button variant="outlined" colorscheme="primary">
              Add to cart
            </Button>
          </ThemeProvider>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
