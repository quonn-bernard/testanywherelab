import { Container, VStack, Text, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const AllServicesPageSection = () => {
  const router = useRouter();
  return (
    <Container
      w="100%"
      maxW="100%"
      h="300px"
      backgroundImage={
        "linear-gradient(to right bottom, rgba(255, 255, 255, .5), rgba(0, 170, 166, .9), rgba(0,0,0, .025)),url()"
      }
    >
      <VStack
        h="100%"
        w="100%"
        maxW="100%"
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Text as="h1" fontWeight={700} fontSize={"xx-large"}>
          Need Something Else?
        </Text>
        <Button
          _hover={{ bg: "secondary", color: "primary" }}
          bg="primary"
          color="secondary"
          onClick={() => router.push(`/services`)}
        >
          View All Services
        </Button>
      </VStack>
    </Container>
  );
};

export default AllServicesPageSection;
