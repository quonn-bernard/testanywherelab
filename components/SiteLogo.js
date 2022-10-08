import { Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../public/logo.png";
import LogoLight from "../public/logo-light.png";
const SiteLogo = () => {
    const router = useRouter();

    return ( <Flex h="100%" mx={0}>
    {useColorMode().colorMode === "dark" ? (
      <Image onClick={() => router.push(`/`)} src={Logo} />
    ) : (
      <Image onClick={() => router.push(`/`)} src={LogoLight} />
    )}
  </Flex> );
}
 
export default SiteLogo;