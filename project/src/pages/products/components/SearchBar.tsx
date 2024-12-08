import { ChangeEvent, memo } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBarComponent = ({ onSearch }: SearchBarProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className="mb-3" style={{ paddingTop: "15px" }}>
      <input
        type="text"
        placeholder="Search products..."
        onChange={handleSearchChange}
        className="form-control"
      />
    </div>
  );
};
const SearchBar = memo(SearchBarComponent);
export default memo(SearchBar);
