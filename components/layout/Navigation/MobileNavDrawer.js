import {
  Box,
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  ListItem,
  UnorderedList,
  Text
} from "@chakra-ui/react";
import Image from "next/image";
import Logo from "../../../public/logo.png";
import { useRouter } from "next/router";
import DropDownMenuItem from "./DropDownMenuItem";
import Link from "next/link";


const MobileNavDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
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
            <Image src={Logo} onClick={() => router.push(`/`)} />
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList listStyleType={"none"}>
              <ListItem><DropDownMenuItem /></ListItem>
              <ListItem><Link pt={2} href="/about"><Text>ABOUT</Text></Link></ListItem>
              <ListItem><Link  href="/contact"><Text pt={2}>CONTACT</Text></Link></ListItem>
              <ListItem><Link  href="/create-account"><Text pt={2}>CREATE ACCOUNT</Text></Link></ListItem>
            </UnorderedList>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavDrawer;
