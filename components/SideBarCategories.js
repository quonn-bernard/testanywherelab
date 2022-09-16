import { GridItem, HStack, Text, Box } from "@chakra-ui/react";
import Link from "next/link";
import GlobalSearch from "../components/GlobalSearch";
import { GiTransparentTubes } from "react-icons/gi";

const SideBarCategories = (props) => {
  return (
    <GridItem
      order={{ base: 2, lg: 1 }}
      border={"1px solid white"}
      borderRadius={10}
      px={8}
      color="black"
      bg="white"
      justifyContent="center"
      alignItems="center"
      height={475}
      display={"flex"}
      flexDir={"column"}
    >
      <HStack
        mb={5}
        w={"100%"}
        border={"1px solid black"}
        justifyContent="center"
        bg="black"
        color="white"
        p={3}
      >
        <GiTransparentTubes fontSize={20} />
        <Text
          as={"p"}
          fontSize={{ base: "16px" }}
          mt={0}
          fontWeight={700}
          letterSpacing={2}
        >
          LAB CATEGORIES
        </Text>
      </HStack>
      <Box mb={10}>
        {props.categories.map((cat) => {
          return (
            <Link
              key={Math.random().toString()}
              href={`/categories/${cat.slug}`}
              replace
            >
              <Text as="p" fontSize={"xl"}>
                {cat.name}
              </Text>
            </Link>
          );
        })}
      </Box>
      <GlobalSearch text="SEARCH OUR TESTS" />
    </GridItem>
  );
};

export default SideBarCategories;
