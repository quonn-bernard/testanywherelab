import { Grid } from "@chakra-ui/react";

const PageContentLayoutGrid = (props) => {
  return (
    <Grid
      templateColumns={{ base: "100%", lg: "25% auto" }}
      gap={{ base: 16, lg: 20 }}
    >
      {props.children}
    </Grid>
  );
};

export default PageContentLayoutGrid;
