import { GridItem, Text, Box, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { customTheme } from "../../theme";

const SideBarCategories = (props) => {

  const { colorMode } = useColorMode();

  return (
    <GridItem
      order={{ base: 2, lg: 1 }}
      color={colorMode === 'dark' ? customTheme.colors.primary : customTheme.colors.secondary}
      justifyContent="flex-start"
      alignItems="flex-start"
      display={"flex"}
      flexDir={"column"}
    >
      <Text as={"p"} pt={"1rem"} fontSize={{ base: "2rem", lg: "1.75rem" }} fontWeight={700}>
        Test Category
      </Text>
      <Box my={6} pl="0">
        {props.categories.map((cat) => {
          return (
            <Link
              key={Math.random().toString()}
              href={`/categories/${cat.slug}`}
            >
              <Text as="p" fontSize={{ base: "1.5rem", lg: "1.75rem" }} pl={0}>
                {cat.name}
              </Text>
            </Link>
          );
        })}
      </Box>
    </GridItem>
  );
};

export default SideBarCategories;
