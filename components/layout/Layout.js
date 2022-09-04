import React, { useRef, useState, useEffect } from "react";
import { Container, Grid, GridItem } from "@chakra-ui/react";
import Navigation from "./Navigation";
import BottomNavigation from "./BottomNav";
import Footer from "./Footer";

const Layout = (props) => {
  const [mainHeight, setMainHeight] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    setMainHeight(ref.current.clientHeight);
    console.log("height: ", ref.current.clientHeight);

    console.log("width: ", ref.current.clientWidth);
  }, []);
  return (
    <Container maxW="100%" w="100%" m="0" p="0">
      <Navigation />
      <main ref={ref} >{props.children}</main>
      <Footer />
    </Container>
  );
};

export default Layout;
