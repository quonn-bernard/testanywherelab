import ListSearch from "../utils/ListSearch";

const SearchForm = (props) => {
  const handleChange = (input) => {
    setCategoryList(ListSearch(input, props.payload));
  };
  return (
    <form>
      <input
        type="text"
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </form>
  );
};

export default SearchForm;
