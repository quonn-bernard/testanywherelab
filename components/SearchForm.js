import ListSearch from "../utils/ListSearch";

const useSearchForm = (props) => {
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
        placeholder={props.placeholder}
      />
    </form>
  );
};

export default useSearchForm;
