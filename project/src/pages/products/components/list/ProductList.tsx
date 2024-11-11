import { Product } from "../../service/products.service";
import CardProduct from "./CardProduct";

interface ProductProps {
  productList: Product[];
}

const ProductList = ({ productList }: ProductProps) => {
  return (
    <div className="d-flex flex-wrap">
    {productList.map((product) => (
      <CardProduct key={product.id} product={product} />
    ))}
  </div>
);
};

export default ProductList;
