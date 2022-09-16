import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoriesList/CategoriesList";
import ServicesList from "../../components/ServicesList/ServicesList";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import { Text, Box, GridItem, HStack, Container, Flex, Heading } from "@chakra-ui/react";
import PageContentLayoutGrid from "../../components/layout/PageContentLayoutGrid";
import { GiTransparentTubes } from "react-icons/gi";

const ServicePage = ({ services }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList(services);
  }, []);

  return (
    <>
    <Container
        h="300px"
        w="100%"
        maxW="100%"
        backgroundImage={
          "linear-gradient(to right bottom, rgba(0, 170, 166, .9), rgba(0, 170, 166, .95)),url(https://res.cloudinary.com/dowmtolou/image/upload/v1662338295/national-cancer-institute-egT3xtDu9DQ-unsplash_fvi63b-e_grayscale_zvtxcj.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Flex justify={"center"} alignItems={"center"} h="100%">
          <Heading>All Lab Tests</Heading>
        </Flex>
      </Container>
      <Container w="100%"
        maxW={{ base: "85%", md: "65%", lg: "80%" }}
        padding={"4rem 0"}>
        <PageContentLayoutGrid>
        <GridItem
            border={"1px solid white"}
            borderRadius={10}
            px={10}
            color="black"
            bg="white"
            justifyContent="center"
            alignItems="center"
            height={475}
            display={"flex"}
            flexDir={"column"}
          >
            <HStack
              mb={5}
              w={"100%"}
              border={"1px solid black"}
              justifyContent="center"
              bg="black"
              color="white"
            >
              <GiTransparentTubes fontSize={20} />
              <Text
                as={"p"}
                fontSize={{ base: "16px" }}
                mt={0}
                fontWeight={700}
                letterSpacing={2}
              >
                LAB CATEGORIES
              </Text>
            </HStack>
          </GridItem>
        <ServicesList services={serviceList} />
        </PageContentLayoutGrid>
      </Container>
      
    </>
  );
};

export async function getStaticProps() {
  await store.dispatch(fetchServicesData());
  return {
    props: {
      services: store.getState().appData.services,
    },
  };
}
export default ServicePage;
