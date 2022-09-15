import { List, ListItem } from "@chakra-ui/react";
import Link from "next/link";

const CategoryList = (props) => {
  return (
    <List>
      {props.categories.map((category, index) => {
        return (
          <ListItem key={Math.random().toString()}>
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          </ListItem>
        );
      })}
    </List>
  );
};

export default CategoryList;
