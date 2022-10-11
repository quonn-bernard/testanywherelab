import { useColorMode } from "@chakra-ui/react";
import { customTheme } from "../../theme";

const blkToWhtColorMode = () => {
  const { colorMode } = useColorMode();
  return colorMode === "light"
    ? customTheme.colors.secondary
    : customTheme.colors.primary;
};

const useCustomColorMode = () => {
  return { blkToWht: blkToWhtColorMode };
};

export default useCustomColorMode;
