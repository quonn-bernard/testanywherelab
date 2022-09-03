import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Container maxW="100%" w="100%" m="0" p="0">
      <Navigation />
      <main >{props.children}</main>
    </Container>
  );
};

export default Layout;
