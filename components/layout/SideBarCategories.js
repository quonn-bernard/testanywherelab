import { GridItem, Text, Box, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import { customTheme } from "../../theme";

const SideBarCategories = (props) => {
  const { colorMode } = useColorMode();

  return (
    <GridItem
      order={{ base: 2, lg: 1 }}
      color={
        colorMode === "dark"
          ? customTheme.colors.primary
          : customTheme.colors.secondary
      }
      justifyContent="flex-start"
      alignItems="flex-start"
      display={"flex"}
      flexDir={"column"}
    >
      <Box borderBottom='1px solid' width="100%" pb={4} display="flex" >
        <Text
          as={"p"}
          pt={"1rem"}
          fontSize={{ base: "2rem", lg: "1.75rem" }}
          fontWeight={700}
          letterSpacing={4}
        >
          CATEGORIES
        </Text>
      </Box>
      <Box mb={6} mt={8} pl="0">
        {props.categories.map((cat) => {
          return (
            <Link
              key={Math.random().toString()}
              href={`/categories/${cat.slug}`}
            >
              <Text
                as="p"
                fontSize={{ base: "1.5rem", lg: "1.75rem" }}
                cursor="pointer"
                pl={0}
                _hover={{
                  color: customTheme.colors.accent,
                  fontWeight: "600",
                }}
              >
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
