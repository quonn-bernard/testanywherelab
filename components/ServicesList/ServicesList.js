import React, { useState, useEffect } from "react";
import { List, ListItem, Spinner } from "@chakra-ui/react";
import ServicesListItem from "./ServicesListItem";

const ServicesList = (props) => {
  const [listCount, setListCount] = useState(6);
  const [countCleared, setCountCleared] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    setListCount(6);
  }, []);

  const loadMoreServices = () => {
    setTimeout(() => {
      countCleared ? setListCount(6) : setListCount((prev) => prev + 6);
    }, 600);
  };

  const handleScroll = (e) => {
    setCountCleared(false);
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      loadMoreServices();
    } else {
      if (window.scrollY === 0) {
        setCountCleared(true);
        setListCount(6);
      }
    }
  };

  return (
    <List>
      {props.services.slice(0, listCount).map((service, index) => {
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
