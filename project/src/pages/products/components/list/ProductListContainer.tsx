import { useEffect, useState } from "react";
import { Product, ProductService } from "../../service/products.service";
import { AxiosError } from "axios";
import ProductList from "./ProductList";

const ProductListContainer = () => {
  const [products, setProducts] = useState<Product[]>([]);
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
        const response = await productService.getProducts();
        if (isMounted) {
          setProducts(response.products);
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

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <ProductList productList={products} />
    </div>
  );
};

export default ProductListContainer;
