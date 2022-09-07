import { useRouter, useEffect } from "next/Router";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";

const servicePage = ({ serviceData }) => {
  const svcData = serviceData[0];
  return (
    <>
      <h1>{svcData.name}</h1>
      <p>{svcData.summary}</p>
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

  const svcData = services.filter((svc) => {
    return svc.slug === params.serviceId;
  });

  return {
    props: {
      serviceData: svcData,
    },
  };
}

export default servicePage;
