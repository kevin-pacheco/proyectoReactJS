import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {
  ButtonGroup,
  Button,
  Image,
  Stack,
  Heading,
  Text,
  Divider,
} from "@chakra-ui/react";

const Item = ({ element }) => {
  return (
    <Card maxW="400">
      <CardBody>
        <Image
          boxSize="300"
          src={element.img}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{element.title}</Heading>
          <Text>{element.description}</Text>
          <Text color="primary.main" fontSize="2xl">
            {element.price}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          {/* <Link to={`/itemDetail/${element.id}`}>
          <Button size="small" variant="contained" color="primary">
            Ver detalle
          </Button>
        </Link> */}
          <Button variant="solid" colorScheme="green">
            Details
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default Item;
