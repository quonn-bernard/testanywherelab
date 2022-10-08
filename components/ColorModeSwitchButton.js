import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import CustomTheme, { customTheme } from "../theme";

const ColorModeButton = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const customColors = customTheme.colors;

  return (
    <header>
      <Button
        bg="highlight"
        _hover={
          colorMode === "dark" ? customColors.highlight : customColors.highlight
        }
        color="primary"
        onClick={toggleColorMode}
      >
        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      </Button>
    </header>
  );
};

export default ColorModeButton;
