import React, { useCallback } from "react";
import { Button } from "react-bootstrap";
import "../css/product.css";
interface PriceSortButtonsProps {
  onSort: (order: "asc" | "desc" | "default") => void;
}

const PriceSortComponent: React.FC<PriceSortButtonsProps> = ({ onSort }) => {
  const handleSortAsc = useCallback(() => {
    onSort("asc");
  }, [onSort]);

  const handleSortDesc = useCallback(() => {
    onSort("desc");
  }, [onSort]);

  const handleSortDefault = useCallback(() => {
    onSort("default");
  }, [onSort]);

  return (
    <div
      className="price"
    >
      <Button
        variant="outline-primary"
        className="buttonprice"
        onClick={handleSortAsc}
      >
        Sort lowest price
      </Button>
      <Button
        variant="outline-secondary"
        className="buttonprice"
        onClick={handleSortDesc}
      >
        Sort highest price
      </Button>
      <Button
        variant="outline-dark"
        className="buttonprice"
        onClick={handleSortDefault}
      >
        Default
      </Button>
    </div>
  );
};

const PriceSort = React.memo(PriceSortComponent);

export default PriceSort;
