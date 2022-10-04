import { Select } from "@chakra-ui/react";

const ServicesFilter = (props) => {
  const handleClick = (e) => {
    props.onOptionSelect(e.target.value)
  };
  return (
    <Select onChange={(e) => handleClick(e)} placeholder={props.text} w="100%">
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
