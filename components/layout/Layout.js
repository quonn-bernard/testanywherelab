import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNav";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <Container maxW="100%" w="100%" m="0" p="0">
      <Navigation />
      <BottomNavigation />
      <main >{props.children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
