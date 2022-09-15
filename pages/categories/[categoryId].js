import { useRouter, useEffect } from "next/Router";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import Link from "next/link";
import {
  Container,
  Text,
  Flex,
  Heading,
  Box,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { useMediaQuery, HStack } from "@chakra-ui/react";
import { GiTransparentTubes } from "react-icons/gi";
import { CategoryList } from "../../components/CategoriesList/CategoriesList";
import GlobalSearch from "../../components/GlobalSearch";

const CategoryPage = ({ serviceData, slug, categories, name }) => {
  const [isLargerThanHD] = useMediaQuery(["(min-width: 992px)"]);

  const determineItemWidth = () => {
    if (isLargerThanHD) {
      return "25%";
    } else {
      return "70%";
    }
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
          <Heading>{name} Tests</Heading>
        </Flex>
      </Container>
      <Container
        w="100%"
        maxW={{ base: "85%", md: "65%", lg: "80%" }}
        padding={"4rem 0"}
      >
        <Flex
          px={{ base: "1rem", lg: "5rem", xl: "10rem" }}
          pb={"6rem"}
          pt={"2rem"}
          w="100%"
        >
          <Text fontSize={"25px"} textAlign="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500s, when an
            unknown printer took a galley of type and scrambled it to make a
            type specimen book.
          </Text>
        </Flex>
        <Grid
          templateColumns={{ base: "100%", lg: "25% auto" }}
          gap={{ base: 16, lg: 20 }}
        >
          <GridItem
            order={{ base: 2, lg: 1 }}
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
            <Box mb={10}>
              {categories.map((cat) => {
                return (
                  <Link key={Math.random().toString()} href={cat.slug}>
                    <Text as="p" fontSize={"xl"}>
                      {cat.name}
                    </Text>
                  </Link>
                );
              })}
            </Box>
            <GlobalSearch />
          </GridItem>
          <GridItem order={{ base: 1, lg: 2 }}>
            <Grid gap={10}>
              {serviceData.map((cat) => {
                return (
                  <GridItem
                    key={Math.random().toString()}
                    border={"1px solid white"}
                    w="100%"
                    h="200"
                    borderRadius={5}
                    padding="1rem"
                    backgroundImage={`linear-gradient(to right bottom, rgba(0, 170, 166, 1), rgba(255, 255, 255, .925) ),url(${cat.bg})`}
                    backgroundSize={"cover"}
                    backgroundPosition={"center center"}
                    minWidth={determineItemWidth()}
                  >
                    <HStack>
                      <Link
                        key={Math.random().toString()}
                        href={{
                          pathname: "/services/[slug]",
                          query: { slug: cat.slug },
                        }}
                        replace
                      >
                        <Text fontSize={"xl"} fontWeight={700}>
                          {cat.name}
                        </Text>
                      </Link>
                    </HStack>
                  </GridItem>
                );
              })}
            </Grid>
          </GridItem>
        </Grid>
      </Container>
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

  const catKey = categories.filter((cat) => {
    if (cat.slug === params.categoryId) {
      return cat;
    }
  });

  const svcData = services.filter((svc) => {
    if (svc.tags.indexOf(catKey[0].name) !== -1) {
      return svc;
    }
  });

  return {
    props: {
      data: store.getState().appData.categories,
      services: services,
      categories: categories,
      serviceData: svcData,
      catkey: catKey,
      name: catKey[0].name,
      slug: params.categoryId,
    },
  };
}

export default CategoryPage;
