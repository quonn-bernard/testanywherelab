import {
  GridItem,
  HStack,
  Text,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
const ServicesListItem = (props) => {
  const [isLargerThanHD] = useMediaQuery(["(min-width: 992px)"]);
  const router = useRouter();
  const determineItemWidth = () => {
    if (isLargerThanHD) {
      return "25%";
    } else {
      return "70%";
    }
  };
  return (
    <GridItem
      key={Math.random().toString()}
      border={"1px solid white"}
      borderTopWidth={0}
      borderRightWidth={0}
      borderLeftWidth={0}
      w="100%"
      padding="1rem 0"
      backgroundSize={"cover"}
      backgroundPosition={"center center"}
      minWidth={determineItemWidth()}
      display={"flex"}
      mb={5}
    >
      <HStack justifyContent={"space-between"} w={"100%"}>
      
          <Text fontSize={{ base: "1rem", lg: "1.75rem" }} fontWeight={700}>
            {props.service.name}
          </Text>
        <Button
          onClick={() => router.push(`/services/${props.service.slug}`)}
          replace="true"
        >
          Learn More
        </Button>
      </HStack>
    </GridItem>
  );
};

export default ServicesListItem;
