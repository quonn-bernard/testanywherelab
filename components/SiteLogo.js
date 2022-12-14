import { Flex, useColorMode } from "@chakra-ui/react";
import Image from "next/image";
import { useRouter } from "next/router";
import Logo from "../public/logo.png";
import LogoLight from "../public/logo-light.png";
const SiteLogo = () => {
  const router = useRouter();

  return (
    <Flex
      h="100%"
      mx={0}
      maxW={{ base: "95%", lg: "85%" }}
      pt={2}
      mr={{ base: 4, lg: 0 }}
      cursor={"pointer"}
    >
      {useColorMode().colorMode === "dark" ? (
        <Image alt='Dark theme logo' onClick={() => router.push(`/`)} src={Logo} />
      ) : (
        <Image alt='Light theme logo' onClick={() => router.push(`/`)} src={LogoLight} />
      )}
    </Flex>
  );
};

export default SiteLogo;
