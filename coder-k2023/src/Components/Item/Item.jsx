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
  ChakraProvider,
} from "@chakra-ui/react";
import { ThemeProvider, Button, Typography } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseTheme } from "../Estilos/Estilos";

const Item = ({ element }) => {
  const [theme] = useState(baseTheme);

  return (
    <ChakraProvider>
      <Card sx={{ marginTop: "-250px" }}>
        <CardBody boxSize="350">
          <Image
            display="flex"
            justifyContent="center"
            maxHeight="250"
            src={element.img}
            alt="imgProduct"
            borderRadius="lg"
            mx="auto"
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
        <CardFooter>
          <ButtonGroup spacing="6.0rem">
            <ThemeProvider theme={theme}>
              <Link to={`itemDetail/${element.id}`}>
                <Button variant="contained" color="primary">
                  <Typography color="white" fontSize="2xl">
                    Detalles
                  </Typography>
                </Button>
              </Link>
              <Button variant="outlined" colorscheme="primary">
                Añadir +
              </Button>
            </ThemeProvider>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </ChakraProvider>
  );
};

export default Item;
