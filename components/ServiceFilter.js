import { Select } from "@chakra-ui/react";
import useCustomColorMode from "./hooks/useCustomColorMode";

const ServicesFilter = (props) => {
  const { blkToWht } = useCustomColorMode();

  const handleClick = (e) => {
    props.onOptionSelect(e.target.value);
  };

  return (
    <Select
      onChange={(e) => handleClick(e)}
      placeholder={props.text}
      w="100%"
      color={blkToWht}
      borderColor={blkToWht}
      minWidth="220px"
    >
      <option onClick={() => handleClick("name")} value="name">
        Sort by Alphabetical Order
      </option>
      <option onClick={() => handleClick("price")} value="price">
        Sort by Price
      </option>
    </Select>
  );
};

export default ServicesFilter;
