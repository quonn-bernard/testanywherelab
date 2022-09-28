import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoriesList/CategoriesList";
import ServicesList from "../../components/ServicesList/ServicesList";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import {
  GridItem,
  VStack,
  Container,
  Flex,
  Heading,
  Checkbox,
  Text,
  Box,
  Divider,
  Grid,
  Show,
} from "@chakra-ui/react";
import PageContentLayoutGrid from "../../components/layout/PageContentLayoutGrid";
import ServicesFilter from "../../components/ServiceFilter";
import ServicesFilterDrawer from "../../components/ServiceFilterDrawer";

let checkedBoxes = [];
let filteredServicesList = [];
const ServicePage = ({ services, categories }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList(services);
  }, []);

  const updateFilteredServicesList = () => {
    checkedBoxes.forEach((category) => {
      filteredServicesList = services.filter((svc) => {
        if (svc.tags.includes(category)) {
          return svc;
        }
      });
    });
  };

  const updateFilteredList = (e) => {
    if (e.target.checked) {
      checkedBoxes.push(e.target.value);
      updateFilteredServicesList();

      if (checkedBoxes.length > 1) {
        setServiceList((prev) => {
          return [...filteredServicesList, ...prev];
        });
      } else {
        setServiceList(filteredServicesList);
      }
    } else {
      checkedBoxes = checkedBoxes.filter((box) => {
        return box !== e.target.value;
      });

      if (checkedBoxes.length) {
        updateFilteredServicesList();
        setServiceList(filteredServicesList);
      } else {
        setServiceList(services);
      }
    }
  };

  const onFilterChange = (e) => {
    updateFilteredList(e);
  };

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
      <Container
        w="100%"
        maxW={{ base: "85%", md: "65%", lg: "80%" }}
        padding={"4rem 0"}
      >
        <Show below="lg">
          <Container w="100%" maxW={"100%"}>
            <Grid
              templateColumns={{ base: "50% 50%", lg: "25% auto" }}
              gap={{ base: 16, lg: 20 }}
              p="0"
              w="80%"
            >
              <ServicesFilterDrawer />
              <Box
                p="0"
                display={"flex"}
                justifyContent={{ base: "center", lg: "flex-end" }}
              >
                <ServicesFilter text="Sort By" />
              </Box>
            </Grid>
          </Container>
        </Show>

        <Show below="lg">
          <Divider mt={10} mb={10} />
        </Show>

        <PageContentLayoutGrid>
          <Show above="lg">
            <GridItem
              borderRadius={10}
              p={{ base: 0, lg: 10 }}
              pt={{ lg: 5 }}
              color="black"
              height="auto"
              flexDir={"column"}
              order={{ base: 1, lg: 0 }}
            >
              <ServicesFilter text="Sort Lab Tests By" />
              <Box
                borderRadius={10}
                border="1px solid black"
                px={5}
                py={3}
                mt={10}
              >
                <Text
                  color={"black"}
                  fontWeight={700}
                  fontSize={{ base: "2rem", lg: "1.5rem", xl: "2rem" }}
                >
                  Test Categories
                </Text>
                <VStack
                  my={5}
                  w={"100%"}
                  gap={3}
                  justifyContent={"flex-start"}
                  alignItems
                >
                  {categories.map((category) => {
                    return (
                      <Checkbox
                        value={category.name}
                        onChange={(e) => onFilterChange(e)}
                        color="black"
                        key={category.id}
                      >
                        {category.name}
                      </Checkbox>
                    );
                  })}
                </VStack>
              </Box>
            </GridItem>
          </Show>
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
      categories: store.getState().appData.categories,
    },
  };
}
export default ServicePage;
