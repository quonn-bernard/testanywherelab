import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const ServicesList = (props) => {
  return (
    <List>
      {props.services.map((service, index) => {
        return (
          <ListItem key={index}>
            <Link href={`/services/${service.slug}`}>{service.name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ServicesList;
