import "../styles/globals.css";
import Layout from "../components/layout/Layout";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "../components/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
