import React, { useEffect } from "react";
import Link from "next/link";
import {
  Box,
  HStack,
  Flex,
  Text,
  Button,
  Show,
  Container,
} from "@chakra-ui/react";
import GlobalSearch from "../../GlobalSearch";
import MobileNavDrawer from "./MobileNavDrawer";
import DropDownMenuItem from "./DropDownMenuItem";
import ColorModeButton from "../../ColorModeSwitchButton";
import SiteLogo from "../../SiteLogo";

const Navigation = (props) => {
  const [show, setShow] = React.useState(false);

  return (
    <Container w="100%" maxW="100%">
      <Flex as="nav" align="center" justify="space-between" py="1rem" m="0">
        <HStack>
          <SiteLogo />
          <Show below="lg">
            <GlobalSearch />
          </Show>
          <MobileNavDrawer />
        </HStack>

        <Box
          display={{ 
            base: "none", lg: "flex"
           }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          fontWeight={600}
          flexDirection={"row"}
        >
          <DropDownMenuItem />
          <Text mr={5}>
            <Link href="/about">ABOUT </Link>
          </Text>
          <Text mr={5}>
            <Link href="/contact">CONTACT</Link>
          </Text>
        </Box>

        <Box
          display={{
            base: show ? "block" : "none",
            sm: show ? "block" : "none",
            lg: "block",
          }}
          mt={{ base: 4, md: 0 }}
        >
          <HStack gap={3}>
            <Show above="lg">
              <GlobalSearch />
            </Show>
            <ColorModeButton />
            <Button rounded={"full"} variant="link">
              CREATE ACCOUNT
            </Button>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navigation;
