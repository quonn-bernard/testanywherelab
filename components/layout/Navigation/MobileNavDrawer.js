import {
  Box,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ListItem,
  UnorderedList,
  Text,
  HStack,
  useColorMode,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { useRouter } from "next/router";
import DropDownMenuItem from "./DropDownMenuItem";
import Link from "next/link";
import SiteLogo from "../../SiteLogo";
import ColorModeButton from "../../ColorModeSwitchButton";
import { customTheme } from "../../../theme";

const MobileNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {colorMode} = useColorMode();
  return (
    <>
      <Box display={{ sm: "block", md: "none" }} onClick={onOpen}>
        <svg
          width="25px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <SiteLogo />
          </DrawerHeader>
          <DrawerHeader borderBottomWidth="1px">
            <HStack gap={16}>
              <ColorModeButton />
              <Badge
                fontSize={"lg"}
                variant={"outline"}
                bg={customTheme.colors.highlight}
                color={colorMode === "dark" ? customTheme.colors.secondary : customTheme.colors.primary}
              >
                {colorMode} Mode
              </Badge>
            </HStack>
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList listStyleType={"none"}>
              <ListItem>
                <DropDownMenuItem />
              </ListItem>
              <ListItem>
                <Link pt={2} href="/about">
                  <Text>ABOUT</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/contact">
                  <Text pt={2}>CONTACT</Text>
                </Link>
              </ListItem>
              <ListItem>
                <Link href="/create-account">
                  <Text pt={2}>CREATE ACCOUNT</Text>
                </Link>
              </ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavDrawer;
