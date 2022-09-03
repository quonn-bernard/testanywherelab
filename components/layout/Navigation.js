import React from "react";
// import useCustomTheme from "../Hooks/useCustomTheme";
// import DefaultButton from "../Buttons/DefaultButton";
import Link from "next/link";

import {
  Box,
  HStack,
  Flex,
  Text,
  Button,
  useColorModeValue,
  useColorMode,
  Container,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  PopoverAnchor,
} from "@chakra-ui/react";

// import DarkModeSwitch from "../DarkModeSwitch";
// import TopHeader from "./TopHeader";
// import BrandLogo from "../BrandLogo";
// import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
// import useServicesData from "../Hooks/useServicesData";

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navigation = (props) => {

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  return (
   
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          wrap="wrap"
          w="100%"
          maxW="auto"
          p="0"
          m="0"
          borderBottom={"1px solid black"}
        >
          <Text fontSize={{ base: "lg", md: "2xl" }} mr={5}>
            <Link href="/">TESTANYWHERE</Link>
          </Text>
          <HStack>
            <Box display={{ sm: "block", md: "none" }} onClick={handleToggle}>
              <svg
                width="25px"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </Box>
            <Show below="md">
              {/* <DarkModeSwitch /> */}
            </Show>
          </HStack>

          <Box
            display={{ base: show ? "block" : "none", md: "flex" }}
            width={{ base: "full", md: "auto" }}
            alignItems="center"
            flexGrow={1}
            fontWeight={600}
          >
            <Menu
              alignItems="center"
              fontWeight={600}
              isOpen={isOpen}
            >
              <MenuButton
                borderRadius="md"
                borderWidth="0"
                // background={useColorModeValue(neutral, dark)}
                _hover={{
               
                }}
                // color={useColorModeValue(dark, neutral)}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
                mr={5}
                fontWeight="600"
              >
                <Link href="/services">SERVICES</Link>
              </MenuButton>
              <MenuList
                // background={useColorModeValue(dark, neutral)}
                // color={useColorModeValue(neutral, dark)}
                onMouseEnter={onOpen}
                onMouseLeave={onClose}
              >
                <MenuItem
                //   _hover={{
                //     // color: menuItemColor,
                //     // background: useColorModeValue(dark, neutral),
                //   }}
                >
                  <Link href="/services">ALL SERVICES</Link>
                </MenuItem>

                {/* {appData.map((cat, index) => {
                  return (<MenuItem
                  key={index}
                  _hover={{
                    color: menuItemColor,
                    background: menuItemBgColor,
                  }}
                >
                   <Link href={`/categories/${cat.slug}/`}>{cat.name}</Link>
                </MenuItem>)
                })} */}

              </MenuList>
            </Menu>
            <Text
            //   _hover={{
            //     color: menuItemColor,
            //   }}
              mr={5}
            >
              <Link href="/about">ABOUT </Link>
            </Text>
            <Text
            //   _hover={{
            //     color: menuItemColor,
            //   }}
              mr={5}
            >
              <Link href="/contact">CONTACT US</Link>
            </Text>
          </Box>

          <Box
            display={{
              base: show ? "block" : "none",
              sm: show ? "block" : "none",
              md: "block",
            }}
            mt={{ base: 4, md: 0 }}
          >
            <HStack>
              <Button
                // bg={useColorModeValue(dark, light)}
                // color={useColorModeValue(neutral, neutral)}
                mr="5"
                rounded={"full"}
                border="1px"
                // borderColor={useColorModeValue(light, neutral)}
                // _hover={{
                //   background: useColorModeValue(light, neutral),
                //   color: useColorModeValue(neutral, dark),
                // }}
                variant="ghost"
              >
                CREATE ACCOUNT
              </Button>
              <Show above="md">
                {/* <DarkModeSwitch /> */}
              </Show>
            </HStack>
          </Box>
        </Flex>
    
  );
};

export default Navigation;
