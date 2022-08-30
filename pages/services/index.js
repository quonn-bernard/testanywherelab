import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoriesList/CategoriesList";
import ServicesList from "../../components/ServicesList/ServicesList";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import ListSearch from "../../utils/ListSearch";

const ServicePage = ({ services }) => {
  const [serviceList, setServiceList] = useState([]);

  useEffect(() => {
    setServiceList(services);
  }, []);

  const handleChange = (e) => {
    setServiceList(ListSearch(e, services));
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          placeholder="Search Lab Services"
        />
      </form>
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
