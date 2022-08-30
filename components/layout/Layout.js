import { Container } from "@chakra-ui/react";
import Navigation from "./Navigation";

const Layout = (props) => {
  return (
    <Container>
      <Navigation />
      <main>{props.children}</main>
    </Container>
  );
};

export default Layout;
