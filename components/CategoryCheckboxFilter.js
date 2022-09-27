import { Checkbox } from "@chakra-ui/react";
const CategoryCheckBoxFilter = (props) => {
    return ( <Checkbox
        color="white"
        onClick={(e) => props.func(e)}
        colorScheme={"teal"}
        value={props.text}
      >
        {props.text}
      </Checkbox>  );
}
 
export default CategoryCheckBoxFilter;