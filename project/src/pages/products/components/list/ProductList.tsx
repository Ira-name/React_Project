import { memo } from "react";
import { useRenderCount } from "../../../../hooks/useRenderCount";
import { Product } from "../../service/products.service";
import CardProduct from "./CardProduct";

interface ProductProps {
  productList: Product[];
  onProductItemDelete: (id: number) => void;
  onSaveProductButtonClick: (
    productId: number,
    updatedProduct: Partial<Product>
  ) => void;
}

const ProductListComponen = ({
  productList,
  onProductItemDelete,
  onSaveProductButtonClick,
}: ProductProps) => {
  const renderCount = useRenderCount();
  return (
    <>
      <h5>Product Table count: {renderCount}</h5>
      <div className="d-flex flex-wrap">
        {productList.map((product) => (
          <CardProduct
            key={product.id}
            product={product}
            onProductItemDelete={onProductItemDelete}
            onSaveProductButtonClick={onSaveProductButtonClick}
          />
        ))}
      </div>
    </>
  );
};
const ProductList = memo(ProductListComponen);
export default ProductList;
