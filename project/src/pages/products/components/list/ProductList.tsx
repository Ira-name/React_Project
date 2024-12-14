import { memo } from "react";
// import { useRenderCount } from "../../../../hooks/useRenderCount";
import { Product } from "../../service/products.service";
import CardProduct from "./CardProduct";
import "../../css/product.css";
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
  // if (productList.length === 0) {
  //   return <p>
  //   No such product found</p>;
  
  // const renderCount = useRenderCount();
  return (
    <>
      {/* <h5>Product Table count: {renderCount}</h5> */}
      {productList.length === 0 ? (
        <p>There is no such product</p>
      ) : (
        <div className="product-list">
          {productList.map((product) => (
            <CardProduct
              key={product.id}
              product={product}
              onProductItemDelete={onProductItemDelete}
              onSaveProductButtonClick={onSaveProductButtonClick}
            />
          ))}
        </div>
      )}
    </>
  );
};

const ProductList = memo(ProductListComponen);
export default ProductList;
