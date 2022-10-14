import React, { useEffect, useState } from "react";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import {
  Container,
  Flex,
  Heading,
  Grid,
  GridItem,
  HStack,
  Text,
  Box,
  UnorderedList,
  ListItem,
  Divider,
  Button,
  VStack,
} from "@chakra-ui/react";
import { GiTransparentTubes } from "react-icons/gi";
import { IoIosCalendar } from "react-icons/io";
import Link from "next/link";
import GlobalSearch from "../../components/GlobalSearch";
import { useRouter } from "next/router";
import AllServicesPageSection from "../../components/layout/AllServicesPageSection";
import SideBarCategories from "../../components/layout/SideBarCategories";

const ServicePage = ({ serviceData, categories }) => {
  const svcData = serviceData[0];
  const [labServiceBulletpoints, setLabServicBulletpoints] = useState([]);
  const router = useRouter();

  const getItemId = () => {
    return Math.random().toString();
  };

  useEffect(() => {
    setLabServicBulletpoints(svcData.bulletpoints);
  }, [svcData]);

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
          <Heading></Heading>
        </Flex>
      </Container>
      <Container
        maxW={{ base: "85%", md: "65%", lg: "80%" }}
        padding={"4rem 0"}
      >
        <Grid
          templateColumns={{ base: "100%", lg: "25% auto" }}
          gap={{ base: 16, lg: 20 }}
        >
          <SideBarCategories categories={categories} />
          <GridItem order={{ base: 1, lg: 2 }}>
            <Box mb={10}>
              <Button w={{ base: "100%", lg: "33vh" }} size="lg">
                <IoIosCalendar fontSize={"1.5rem"} />
                <Text fontSize={"1.25rem"} ml={3}>
                  MAKE AN APPOINTMENT
                </Text>
              </Button>
            </Box>
            <Box mt={5} mb={10} fontSize={"lg"}>
              {svcData.summary}
            </Box>
            <Divider />
            <Text as="h1" fontWeight={700} fontSize={"xx-large"} mt={10} mb={5}>
              This test includes:
            </Text>
            <UnorderedList mb={10}>
              {labServiceBulletpoints &&
                labServiceBulletpoints.map((service) => {
                  return (
                    <ListItem key={getItemId()} mb={3}>
                      <Text as="p">{service}</Text>
                    </ListItem>
                  );
                })}
            </UnorderedList>
          </GridItem>
        </Grid>
      </Container>
      <AllServicesPageSection />
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { serviceId: "covid-19-rapid-test-pcr" } },
      { params: { serviceId: "covid-19-rapid-antigen-test" } },
      { params: { serviceId: "covid-19-vaccination" } },
      { params: { serviceId: "thyroid-stimulating-hormone-test" } },
      { params: { serviceId: "rapid-glucose-test" } },
      { params: { serviceId: "pregnancy-test" } },
      { params: { serviceId: "renal-function-panel" } },
      { params: { serviceId: "comprehensive-metabolic-panel" } },
      { params: { serviceId: "comprehensive-health-panel" } },
      { params: { serviceId: "standard-health-panel" } },
      { params: { serviceId: "basic-health-panel" } },
      { params: { serviceId: "basic-metabolic-panel" } },
      { params: { serviceId: "lipid-panel" } },
      { params: { serviceId: "lipid-panel-plus" } },
      { params: { serviceId: "liver-panel-plus" } },
      { params: { serviceId: "general-chemistry-6" } },
      { params: { serviceId: "general-chemistry-13" } },
      { params: { serviceId: "electrolyte-panel" } },
      { params: { serviceId: "kidney-check" } },
      { params: { serviceId: "renal-function-panel" } },
      { params: { serviceId: "metlyte-8-panel" } },
      { params: { serviceId: "complete-blood-count" } },
      { params: { serviceId: "urinalysis" } },
      { params: { serviceId: "ptinr-clotting-test" } },
      { params: { serviceId: "hemoglobin-a1c" } },
      { params: { serviceId: "flu-test" } },
      { params: { serviceId: "12-panel-drug-test" } },
    ],
    fallback: false, // can also be true or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  await store.dispatch(fetchServicesData());
  const services = await store.getState().appData.services;
  const categories = await store.getState().appData.categories;
  let obj;
  const svcData = services.filter((svc) => {
    if (svc.slug === params.serviceId) {
      obj = svc;
      return svc.slug;
    }
  });

  return {
    props: {
      serviceData: svcData,
      categories: categories,
      // name: obj.name,
    },
  };
}

export default ServicePage;
