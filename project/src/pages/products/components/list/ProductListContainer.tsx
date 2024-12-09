import ErrorMessage from "../../../../components/layout/ErrorMessage";
import Loading from "../../../../components/layout/Loading";
import { useRenderCount } from "../../../../hooks/useRenderCount";
import { useProductTableStore } from "../../hooks/useProductTableStore";
import PaginationPage from "../PaginationPage";
import PriceSort from "../PriceSort";
import SearchBar from "../SearchBar";
import AddProductForm from "../AddProductForm";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const renderCount = useRenderCount();

  const {
    error,
    loading,
    memoizedSaveProductButtonClickCallback,
    memoizedProductItemDeleteButtonClickCallback,
    memoizedAddProductCallback,
    memoizedSearchProductsCallback,
    memoizedSortProductsCallback,
    currentPage,
    fetchProductsByPage,
    productList,
  } = useProductTableStore();

  const handlePageChange = (page: number) => {
    fetchProductsByPage(page);
  };

  return (
    <div>
      {/* <h5>ProductTableContainer count: {renderCount}</h5> */}
      {loading && <Loading />}
      {error && <ErrorMessage error={error} />}
      <AddProductForm onAddProduct={memoizedAddProductCallback} />
      <SearchBar onSearch={memoizedSearchProductsCallback} />
      <PriceSort onSort={memoizedSortProductsCallback} />

      <ProductList
        productList={productList}
        onProductItemDelete={memoizedProductItemDeleteButtonClickCallback}
        onSaveProductButtonClick={memoizedSaveProductButtonClickCallback}
      />
      <PaginationPage
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ProductListContainer;
