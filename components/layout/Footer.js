import {
    Box,
    Container,
    Stack,
    Text,
    Link,
    useColorModeValue,
  } from "@chakra-ui/react";
//   import useCustomTheme from "../Hooks/useCustomTheme";
  
  export default function SmallWithNavigation() {
    // const { dark, light, neutral } = useCustomTheme();
    return (
      <Box
        boxShadow="xl"
        bg={'#000'}
        color={'#fff'}
        // borderTop={`.5px solid ${useColorModeValue(dark, neutral)}`}
      >
        <Container
          as={Stack}
          maxW={"container.xl"}
          pt={4}
          pb={6}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Stack direction={"row"} spacing={6}>
            <Link href={"#"}>Privacy Statement</Link>
            <Link href={"#"}>Terms of Use</Link>
          </Stack>
          <Text>© 2022 Test Anywhere Labs. All rights reserved</Text>
        </Container>
      </Box>
    );
  }
  