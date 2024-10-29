import { GenericAbortSignal } from "axios";
import { HttpClient } from "../../../utils/http/HttpClient";

interface PaginatedResponse {
  total: number;
  skip: number;
  limit: number;
}
interface PaginatedProductResponse extends PaginatedResponse {
  products: Product[];
}
export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
}

type CreateProductRequest = Omit<Product, "id">;
type UpdateProductRequest = Omit<Product, "id">;
type DeleteProductResponse = Product & {
  isDeleted: boolean;
  deletedOn: Date | string;
};

export class ProductService {
  private httpClient: HttpClient;

  constructor(signal?: GenericAbortSignal) {
    this.httpClient = new HttpClient({
      baseURL: "https://dummyjson.com",
      signal,
    });
  }

  public async getProducts(): Promise<PaginatedProductResponse> {
    return await this.httpClient.get<PaginatedProductResponse>("/products");
  }
  public async getProductById(Id: number): Promise<Product> {
    return await this.httpClient.get<Product>(`/products/${Id}`);
  }
  public async searchProducts(
    title: string
  ): Promise<PaginatedProductResponse> {
    return await this.httpClient.get<PaginatedProductResponse>(
      `/products/search?q=${title}`
    );
  }
  public async getPaginatedProducts(
    limit: number,
    skip: number
  ): Promise<PaginatedProductResponse> {
    return await this.httpClient.get<PaginatedProductResponse>(
      `/products?limit=${limit}&skip=${skip}`
    );
  }
  public async getSortedProducts(
    sortBy: string,
    order: "asc" | "desc"
  ): Promise<PaginatedProductResponse> {
    return await this.httpClient.get<PaginatedProductResponse>(
      `/products?sortBy=${sortBy}&order=${order}`
    );
  }
  public async getProductsByCategory(
    category: string
  ): Promise<PaginatedProductResponse> {
    return await this.httpClient.get<PaginatedProductResponse>(
      `/products/category/${category}`
    );
  }
  public async addProduct(product: CreateProductRequest): Promise<Product> {
    return await this.httpClient.post<Product, CreateProductRequest>(
      "/products/add",
      product
    );
  }
  public async updateProduct(product: Product): Promise<Product> {
    return await this.httpClient.put<Product, UpdateProductRequest>(
      `/products/${product.id}`,
      product
    );
  }
  public async deleteProductById(id: number): Promise<DeleteProductResponse> {
    return await this.httpClient.delete<DeleteProductResponse>(
      `/products/${id}`
    );
  }
}
