import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import {
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  GridItem,
  useColorMode,
} from "@chakra-ui/react";
import AllServicesPageSection from "../../components/layout/AllServicesPageSection";
import ServicesListItem from "../../components/ServicesList/ServicesListItem";
import SideBarCategories from "../../components/layout/SideBarCategories";
import { customTheme } from "../../theme";

const CategoryPage = ({ serviceData, categories, name }) => {
  const { colorMode } = useColorMode();

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
          <Heading>{name} Tests</Heading>
        </Flex>
      </Container>
      <Container w="100%" maxW="100%" padding={"4rem 0"}>
        <Flex
          px={{ base: "1rem", lg: "5rem", xl: "10rem" }}
          pb={"4rem"}
          pt={"0"}
          w="100%"
          borderBottom={"1px"}
          borderColor={
            colorMode === "dark"
              ? customTheme.colors.highlight
              : customTheme.colors.secondary
          }
        >
          <Text fontSize={"20px"}>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.`}
          </Text>
        </Flex>
      </Container>
      <Container
        w="100%"
        maxW={{ base: "85%", md: "65%", lg: "80%" }}
        padding={"1rem 0 5rem"}
      >
        <Grid
          templateColumns={{ base: "100%", lg: "25% auto" }}
          gap={{ base: 16, lg: 20 }}
        >
          <SideBarCategories categories={categories} />
          <GridItem order={{ base: 1, lg: 2 }}>
            <Grid gap={2}>
              {serviceData.map((cat, index) => {
                return <ServicesListItem service={cat} key={index} />;
              })}
            </Grid>
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
      { params: { categoryId: "routine-labs" } },
      { params: { categoryId: "infectious-disease" } },
      { params: { categoryId: "diabetes-screening" } },
      { params: { categoryId: "clotting-screening" } },
      { params: { categoryId: "urine-based-testing" } },
      { params: { categoryId: "job-onboarding" } },
      { params: { categoryId: "womens-health" } },
      { params: { categoryId: "immunizations" } },
      { params: { categoryId: "test-bundles" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  await store.dispatch(fetchServicesData());
  const services = await store.getState().appData.services;
  const categories = await store.getState().appData.categories;

  const catKeys = categories.filter((cat) => {
    if (cat.slug === params.categoryId) {
      return {cat: cat, name: cat.name};
    }
  });

  const svcData = services.filter((svc) => {
    if (svc.tags.indexOf(catKeys[0].name) !== -1) {
      return svc;
    }
  });

  return {
    props: {
      data: store.getState().appData.categories,
      services: services,
      categories: categories,
      serviceData: svcData,
      catkey: catKeys,
      name: catKeys[0].name,
      slug: params.categoryId,
    },
  };
}

export default CategoryPage;
