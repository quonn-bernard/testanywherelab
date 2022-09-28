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
import { BsSearch } from "react-icons/bs";

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

const BottomNavigation = (props) => {
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
      p="4px 1rem"
      m="0"
      borderBottom={"1px solid black"}
      background={"#000"}
      display={"none"}
    >
        <form><input type="text" placeholder="Search our tests" /></form>
    </Flex>
  );
};

export default BottomNavigation;
