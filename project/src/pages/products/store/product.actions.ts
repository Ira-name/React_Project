import { Product } from "../service/products.service";

type ProductPayloadTypes =
  | Product[]
  | Product
  | number
  | { id: number; updates: Partial<Product> };

export interface ProductAction {
  type: ProductActionTypes;
  payload: ProductPayloadTypes;
}

export enum ProductActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  UPDATE_PRODUCT = "UPDATE_PRODUCT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  SET_PRODUCT_LIST = "SET_PRODUCT_LIST",
  SET_PRODUCT = "SET_PRODUCT",
}

export const addProductAction = (product: Product): ProductAction => ({
  type: ProductActionTypes.ADD_PRODUCT,
  payload: product,
});

export const updateProductAction = (
  id: number,
  updates: Partial<Product>
): ProductAction => ({
  type: ProductActionTypes.UPDATE_PRODUCT,
  payload: { id, updates },
});

export const deleteProductAction = (id: number): ProductAction => ({
  type: ProductActionTypes.DELETE_PRODUCT,
  payload: id,
});

export const setProductListAction = (products: Product[]): ProductAction => ({
  type: ProductActionTypes.SET_PRODUCT_LIST,
  payload: products,
});

export const setProductAction = (product: Product): ProductAction => ({
  type: ProductActionTypes.SET_PRODUCT,
  payload: product,
});
