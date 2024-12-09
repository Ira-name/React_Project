import PageTitle from "../../components/layout/PageTitle";
import ProductListContainer from "./components/list/ProductListContainer";

const ProductPage = () => {
  return (
    <div>
      <PageTitle title="Product " />
      <ProductListContainer />
    </div>
  );
};

export default ProductPage;
