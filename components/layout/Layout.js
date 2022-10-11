import React, { useRef, useState, useEffect } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "../layout/Navigation/Navigation";
import BottomNavigation from "./BottomNav";
import Footer from "./Footer";

const Layout = (props) => {
  const [mainHeight, setMainHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    setMainHeight(ref.current.clientHeight);
  }, []);

  return (
    <Container maxW="100%" w="100%" m="0" p="0">
      <Navigation />
      <main ref={ref}>{props.children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
