import React, { useEffect } from "react";
import Link from "next/link";
import {
  Box,
  HStack,
  Flex,
  Text,
  Button,
  Show,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import GlobalSearch from "../GlobalSearch";
import Logo from "../../public/logo.png";
const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mr={6} display="block">
    {children}
  </Text>
);

const Navigation = (props) => {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container w="100%" maxW={{ base: "100%", md: "65%", lg: "80%" }}>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        // wrap="wrap"
        w={{ base: "100%" }}
        maxW="auto"
        py="1rem"
        m="0"
        borderBottom={"1px solid black"}
      >
        <HStack>
          <Flex h="100%" mr={{base: 0, lg: 10}}>
            <Link href="/" border={"1px solid white"}>
              <Image src={Logo} />
            </Link>
          </Flex>
          <Show below="md">
            <GlobalSearch />
          </Show>
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
          <Show below="md">{/* <DarkModeSwitch /> */}</Show>
        </HStack>

        <Box
          display={{ base: show ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          fontWeight={600}
          flexDirection={"row"}
        >
          <Menu alignItems="center" fontWeight={600} isOpen={isOpen}>
            <MenuButton
              borderRadius="md"
              borderWidth="0"
              _hover={{}}
              onMouseEnter={onOpen}
              onMouseLeave={onClose}
              mr={5}
              fontWeight="600"
            >
              <Link href="/services">SERVICES</Link>
            </MenuButton>
            <MenuList onMouseEnter={onOpen} onMouseLeave={onClose}>
              <MenuItem>
                <Link href="/categories/routine-labs">Routine Labs</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/infectious-disease">
                  infectious Disease
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/diabetes-screening">
                  Diabetes Screen
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/clotting-screening">
                  Clotting Screen
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/urine-based-testing">
                  Urine Based Tests
                </Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/job-onboarding">Job Onboarding</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/womens-health">Womens' Health</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/immunizations">Immunizations</Link>
              </MenuItem>
              <MenuItem>
                <Link href="/categories/test-bundles">Test Bundles</Link>
              </MenuItem>
            </MenuList>
          </Menu>
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
            md: "block",
          }}
          mt={{ base: 4, md: 0 }}
        >
          <HStack gap={3}>
            <Show above="md">
              <GlobalSearch />
            </Show>
            <Button rounded={"full"} variant="link">
              CREATE ACCOUNT
            </Button>
            <Show above="md">{/* <DarkModeSwitch /> */}</Show>
          </HStack>
        </Box>
      </Flex>
    </Container>
  );
};

export default Navigation;
