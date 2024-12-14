import React from "react";
import { Button } from "react-bootstrap";
import "../css/product.css";
interface PaginationPageProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const PaginationPage: React.FC<PaginationPageProps> = ({
  currentPage,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    onPageChange(currentPage + 1);
  };

  return (
    <div className="pagination">
      <Button
        variant="outline-secondary"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="button-pagination"
      >
        Previous
      </Button>
      <Button variant="outline-primary" onClick={handleNext} className="button-pagination">
        Next
      </Button>
    </div>
  );
};

export default React.memo(PaginationPage);
