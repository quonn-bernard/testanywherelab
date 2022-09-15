import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoriesList/CategoriesList";
import ServicesList from "../../components/ServicesList/ServicesList";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import { Grid } from "@chakra-ui/react";

const ServicePage = ({ services }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList(services);
  }, []);

  return (
    <>
      <ServicesList services={serviceList} />
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
