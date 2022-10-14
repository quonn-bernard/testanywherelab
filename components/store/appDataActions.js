import { update } from "./appDataSlice";
import { useDispatch } from "react-redux";

export const fetchServicesData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://testanywherelab-6zlojb2yj-test-anywhere-lab.vercel.app/api");

      if (!response.ok) {
        throw new Error("Encountered a problem, while fetching services data");
      }

      const data = await response.json();

      return data;
    };

    try {
      const appData = await fetchData();
      dispatch(
        update({
          services: appData.services,
          categories: appData.categories,
        })
      );
    } catch (error) {
    //   alert(error);
    }
  };
};
