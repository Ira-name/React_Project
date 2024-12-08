import { useCallback, useEffect, useReducer, useState } from "react";
import { AxiosError } from "axios";
import { ProductService, Product } from "../service/products.service";
import {
  addProductAction,
  deleteProductAction,
  setProductListAction,
  updateProductAction,
} from "../store/product.actions";
import { initialProductState, productReducer } from "../store/product.reducer";

export const useProductTableStore = () => {
  const [state, dispatch] = useReducer(productReducer, initialProductState);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const abortController = new AbortController();
    const signal = abortController.signal;

    const productService = new ProductService(signal);

    const fetchProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await productService.getPaginatedProducts(12, 0);

        if (isMounted) {
          dispatch(setProductListAction(response.products));
        }
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      isMounted = false;
      abortController.abort();
    };
  }, []);

  const memoizedProductItemDeleteButtonClickCallback = useCallback(
    async (id: number) => {
      try {
        setLoading(true);

        await new ProductService().deleteProductById(id);

        dispatch(deleteProductAction(id));

        setLoading(false);
      } catch (error) {
        setError((error as AxiosError).message);
        setLoading(false);
      }
    },
    []
  );
  const memoizedAddProductCallback = useCallback(
    async (newProduct: Partial<Product>) => {
      try {
        setLoading(true);

        const productService = new ProductService();
        const createdProduct = await productService.addProduct(
          newProduct as Product
        );

        dispatch(addProductAction(createdProduct));
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const memoizedSearchProductsCallback = useCallback(
    async (searchQuery: string) => {
      try {
        setLoading(true);
        const productService = new ProductService();
        const response = await productService.searchProducts(searchQuery);
        dispatch(setProductListAction(response.products));
      } catch (error) {
        setError((error as AxiosError).message);
      } finally {
        setLoading(false);
      }
    },
    []
  );
  const memoizedSaveProductButtonClickCallback = useCallback(
    async (productId: number, updatedProduct: Partial<Product>) => {
      try {
        if (!updatedProduct) {
          return;
        }

        dispatch(updateProductAction(productId, updatedProduct));
      } catch (error) {
        setError((error as AxiosError).message);
      }
    },
    []
  );

  return {
    productList: state.productList,
    loading,
    error,
    memoizedProductItemDeleteButtonClickCallback,
    memoizedSaveProductButtonClickCallback,
    memoizedAddProductCallback,
    memoizedSearchProductsCallback,
  };
};

