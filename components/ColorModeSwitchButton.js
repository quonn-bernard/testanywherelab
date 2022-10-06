import { Button, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const ColorModeButton = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    console.log(colorMode)
    return (
      <header>
        <Button bg="highlight" color="primary" onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </header>
    )
  }
 
export default ColorModeButton;