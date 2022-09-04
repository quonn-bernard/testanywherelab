import React, { useEffect, useState, useRef } from "react";
import store from "../components/store";
import { fetchServicesData } from "../components/store/appDataActions";
import ListSearch from "../utils/ListSearch";
import {
  Grid,
  SimpleGrid,
  GridItem,
  Flex,
  Container,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading, useMediaQuery, Box, HStack } from "@chakra-ui/react";
// import Carousel from "framer-motion-carousel";
import { motion } from "framer-motion";
import Carousel from "../components/Carousel";

const HomePage = ({ categories }) => {
  const [categoryList, setCategoryList] = useState([]);
  const colors = ["#f90", "#ef0", "#e0f"];
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setCategoryList(categories);
  }, []);

  //   useEffect(() => {
  //     setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  //   }, []);

  const [isLargerThanHD] = useMediaQuery(["(min-width: 992px)"]);

  const determineItemWidth = () => {
    if (isLargerThanHD) {
      return "25%";
    } else {
      return "70%";
    }
  };

  const determineItemMArgin = () => {
    if (isLargerThanHD) {
      return ".6% 1.95% .6% .05%";
    } else {
      return "0 1.25% .6% 1.25%";
    }
  };

  const handleChange = (e) => {
    setCategoryList(ListSearch(e, categories));
  };
  return (
    <>
      <Container
        m="0"
        p="0"
        w="100%"
        maxW="100%"
        backgroundImage={
          "linear-gradient(to right bottom, rgba(255, 255, 255, .85), rgba(0, 170, 166, .95)),url(https://res.cloudinary.com/dowmtolou/image/upload/v1660140120/web_images_1_1_sfpase.png)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center top"}
      >
        <Flex
          w="100%"
          m="0"
          maxW="100%"
          justifyContent={{ base: "flex-start", lg: "center" }}
          alignItems={{ base: "flex-start", lg: "center" }}
          padding={{
            base: "6rem 2rem 7rem",
            md: "6rem 4rem 7rem",
            lg: "8rem 6rem 9rem",
          }}
          h={{base: "auto", lg: "60vh"}}
        >
          <VStack
            w={{ base: "100vh", sm: "85vh", lg: "65vh" }}
            justifyContent={{ base: "flex-start", lg: "center" }}
            alignItems={{ base: "flex-start", lg: "center" }}
            gap={2}
          >
            <Text
              fontSize={{ base: "15px", lg: "16px" }}
              textAlign={{ base: "left", lg: "center" }}
            >
              SERVING SHELBY CO. TN & BEYOND!
            </Text>
            <Heading
              mb={10}
              textAlign={{ base: "left", lg: "center" }}
              lineHeight={1.25}
            >
              Affordable Lab Testing With 24hr Turnaround!
            </Heading>
            <Text as="p" textAlign={{ base: "left", lg: "center" }}>
              No doctor's referral necessary or insurance necessary! We are a
              CLIA certified lab and typically provide lab results in 24hrs or
              less!
            </Text>
            <Button>VIEW ALL SERVICES</Button>
          </VStack>
        </Flex>
      </Container>
      <HStack>
        <Carousel categories={categories} />
      </HStack>

      {/* <form>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </form>
      <CategoryListSideBar />
      <CategoryList categories={categoryList} /> */}
      {/* <SimpleGrid
        minChildWidth="300px"
        h="200px"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={4}
      >
        <GridItem rowSpan={2} colSpan={1}>
          {" "}
          <CategoryListSideBar />
        </GridItem>
        <GridItem colSpan={4} bg="tomato" />
        <GridItem colSpan={4} bg="tomato" />
      </SimpleGrid> */}
      {/* <SimpleGrid columns={[1, 1, 2, 2]} spacing="40px">
        <Box bg="tomato" height="80px"></Box>
        <GridItem colSpan={4} bg="tomato" />
        <GridItem colSpan={4} bg="tomato" />
      </SimpleGrid> */}

      {/* <Grid
        h="100vh"
        templateRows="repeat(2, 1fr)"
        templateColumns={{ base: "100%", lg: "repeat(5, 1fr)" }}
      >
        <GridItem
          order={{ base: 2, lg: 2 }}
          rowSpan={1}
          colSpan={1}
          borderRight={"1px solid red"}
        >
          <CategoryListSideBar />
        </GridItem>
        <GridItem order={{ base: 1, lg: 2 }} colSpan={4} />
      </Grid> */}
    </>
  );
};

export async function getStaticProps() {
  await store.dispatch(fetchServicesData());
  return {
    props: {
      categories: store.getState().appData.categories,
    },
  };
}
export default HomePage;
