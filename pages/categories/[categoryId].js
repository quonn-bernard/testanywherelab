import { useRouter, useEffect } from "next/Router";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import Link from "next/link";
import { Container, Text, Flex, Heading } from "@chakra-ui/react";

const CategoryPage = ({ serviceData, slug }) => {
  return (
    <>
      <Container
        h="400px"
        w="100%"
        maxW="100%"
        backgroundImage={
          "linear-gradient(to right bottom, rgba(0, 170, 166, .9), rgba(0, 170, 166, .95)),url(https://res.cloudinary.com/dowmtolou/image/upload/v1662338295/national-cancer-institute-egT3xtDu9DQ-unsplash_fvi63b-e_grayscale_zvtxcj.jpg)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <Flex justify={"center"} alignItems={"center"} h="100%">
          <Heading>{slug} Tests</Heading>
        </Flex>
      </Container>

      {serviceData.map((cat, index) => {
        return (
          <Link
            key={index}
            href={{
              pathname: "/services/[slug]",
              query: { slug: cat.slug },
            }}
            replace
          >
            <p>{cat.name}</p>
          </Link>
        );
      })}
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
    fallback: false, // can also be true or 'blocking'
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
      serviceData: svcData,
      catkey: catKey,
      name: catKey[0].name,
      slug: params.categoryId,
    },
  };
}

export default CategoryPage;
