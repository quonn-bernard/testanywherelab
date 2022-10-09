import { customTheme } from "../../theme";

const useContainerSize = () => {
  const defaultContainerSize = customTheme.sizing.containers.default;
  return { defaultContainerSize };
};

export default useContainerSize;
