import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import ServicesListItem from "./ServicesListItem";

const ServicesList = (props) => {
  return (
    <List>
      {props.services.map((service, index) => {
        return (
          <ListItem key={index}>
            <ServicesListItem service={service} />
          </ListItem>
        );
      })}
    </List>
  );
};

export default ServicesList;
