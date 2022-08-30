import { useRouter, useEffect } from "next/Router";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import Link from "next/link";

const CategoryPage = ({ serviceData }) => {
  const router = useRouter();

  return (
    <h1>
      {serviceData.map((cat, index) => {
        return (
          <Link
            key={index}
            href={{
              pathname: "/services/[slug]",
              query: { slug: cat.slug },
            }}
            // href={`services/${cat.slug}`}
            replace
          >
            <p>{cat.slug}</p>
          </Link>
        );
      })}
    </h1>
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
    },
  };
}

export default CategoryPage;
