import React, { useCallback } from "react";
import { Button } from "react-bootstrap";

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
      style={{ display: "flex", justifyContent: "start", marginBottom: "1rem" }}
    >
      <Button
        variant="outline-primary"
        style={{ margin: "0 8px" }}
        onClick={handleSortAsc}
      >
        Sort lowest price
      </Button>
      <Button
        variant="outline-secondary"
        style={{ margin: "0 8px" }}
        onClick={handleSortDesc}
      >
        Sort highest price
      </Button>
      <Button
        variant="outline-dark"
        style={{ margin: "0 8px" }}
        onClick={handleSortDefault}
      >
        Default
      </Button>
    </div>
  );
};

const PriceSort = React.memo(PriceSortComponent);

export default PriceSort;
