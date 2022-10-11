import React, { useEffect, useState, useRef } from "react";
import store from "../components/store";
import { fetchServicesData } from "../components/store/appDataActions";
import {
  Flex,
  Container,
  VStack,
  Button,
} from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading, HStack } from "@chakra-ui/react";
import Carousel from "../components/Carousel";

const HomePage = ({ categories }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(categories);
  }, []);

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
        <Carousel categories={categoryList} />
      </HStack>
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
