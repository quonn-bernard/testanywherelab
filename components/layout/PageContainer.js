import { Container } from "@chakra-ui/react";

const PageContainer = (props) => {
  return <Container w="full">{props.children}</Container>;
};

export default PageContainer;
