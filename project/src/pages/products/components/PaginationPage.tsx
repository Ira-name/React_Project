import React from "react";
import { Button } from "react-bootstrap";

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
    <div className="d-flex justify-content-center mt-4">
      <Button
        variant="outline-secondary"
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="mx-2"
      >
        Previous
      </Button>
      <Button variant="outline-primary" onClick={handleNext} className="mx-2">
        Next
      </Button>
    </div>
  );
};

export default React.memo(PaginationPage);
