import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const customTheme = extendTheme({
  config,
  colors: {
    primary: "#fff",
    secondary: "#1a202c",
    highlight: "#069e9c",
    accent: "#eb1899",
  },
  sizing: {
    containers: {
      default: { base: "85%", md: "65%", lg: "80%" }
    }
  }
});
