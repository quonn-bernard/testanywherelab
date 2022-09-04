import React, { useEffect, useState } from "react";
import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
} from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import store from "./store";
import ListSearch from "../utils/ListSearch";
import { fetchServicesData } from "./store/appDataActions";
import { useSelector, useDispatch } from "react-redux";
import ServicesList from "./ServicesList/ServicesList";

function GlobalSearch() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [services, setServices] = useState([]);

  useEffect(() => {
    dispatch(fetchServicesData());
    setServices([])
  }, []);

  const handleChange = (e) => {
    if(e.target.value.length > 0){
      setServices(ListSearch(e, state.appData.services))
    }else{
      setServices(ListSearch(e, []))
    }
  };

  return (
    <>
      <Button
        ref={btnRef}
        onClick={onOpen}
        background="black"
        color={"white"}
        _hover={{ background: "teal" }}
        p="0"
      >
        <BsSearch />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Search Lab Tests</DrawerHeader>

          <DrawerBody>
            <Input
              onChange={(e) => handleChange(e)}
              placeholder="Enter test name or code..."
            />
            <ServicesList services={services} />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default GlobalSearch;
