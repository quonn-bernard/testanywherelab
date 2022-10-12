import { useColorMode } from "@chakra-ui/react";
import { customTheme } from "../../theme";

const useCustomColorMode = () => {
  const { colorMode } = useColorMode();
  const color = colorMode === "light"
    ? customTheme.colors.secondary
    : customTheme.colors.primary;

  return { blkToWht: color };
};

export default useCustomColorMode;
