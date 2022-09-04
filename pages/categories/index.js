import React, { useEffect, useState } from "react";
import CategoryList from "../../components/CategoriesList/CategoriesList";
import store from "../../components/store";
import { fetchServicesData } from "../../components/store/appDataActions";
import ListSearch from "../../utils/ListSearch";
import SearchForm from "../../components/GlobalSearch";

const HomePage = ({ categories }) => {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {
    setCategoryList(categories);
  }, []);

  const handleChange = (e) => {
    setCategoryList(ListSearch(e, categories));
  };

  return (
    <>
      <form>
        <input
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </form>
      <CategoryList categories={categoryList} />
    </>
  );
};

export async function getStaticProps() {
  await store.dispatch(fetchServicesData());
  return {
    props: {
      categories: store.getState().appData.categories,
    },
  };
}
export default HomePage;