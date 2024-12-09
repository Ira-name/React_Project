import React, { useCallback } from "react";
// import { useRenderCount } from "../../../hooks/useRenderCount";

interface ProductTitleInputProps {
  title: string;
  onProductTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ProductTitleInputComponent = ({
  title,
  onProductTitleChange,
}: ProductTitleInputProps) => {
  // const renderCount = useRenderCount();
  const memoizedProductTitleChangeCallback = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onProductTitleChange(event);
    },
    [onProductTitleChange]
  );

  return (
    <input
      style={{
        width: "100%",
      }}
      type="text"
      value={title}
      onChange={memoizedProductTitleChangeCallback}
      placeholder="Enter product title"
    />
  );
};

const ProductTitleInput = React.memo(ProductTitleInputComponent);

export default ProductTitleInput;
