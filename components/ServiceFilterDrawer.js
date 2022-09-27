import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerCloseButton,
  DrawerHeader,
  Input,
  Button,
  useDisclosure,
  Box,
  VStack,
  Checkbox,
  Text,
} from "@chakra-ui/react";
import ServicesFilter from "./ServiceFilter";

function ServicesFilterDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const filterList = (e) => {
    e.preventDefault()
    
    console.log(e.target.value)
  };

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Filter Services
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filter Services</DrawerHeader>

          <DrawerBody>
            <Box px={5} py={3}>
              <VStack
                my={5}
                w={"100%"}
                gap={3}
                justifyContent={"flex-start"}
                alignItems
              >
                <Checkbox
                  color="white"
                  onClick={(e) => filterList(e)}
                  colorScheme={"teal"}
                >
                  Routine Labs
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Infectious Disease
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Diabetes Screen
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Clotting Screen
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Urine Based Tests
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Blood Based Tests
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Clotting Screen
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Job Onboarding
                </Checkbox>
                <Checkbox color="white" colorScheme={"teal"}>
                  Clotting Screen
                </Checkbox>
              </VStack>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ServicesFilterDrawer;
