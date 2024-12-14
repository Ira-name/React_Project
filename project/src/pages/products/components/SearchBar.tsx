import { ChangeEvent, memo } from "react";
import "../css/product.css";
interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBarComponent = ({ onSearch }: SearchBarProps) => {
  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };
  return (
    <div className="mb">
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
