import { Product } from "../service/products.service";
import { ProductAction, ProductActionTypes } from "./product.actions";

interface ProductState {
  productList: Product[];
  selectedProduct: Product | null;
}

export const initialProductState: ProductState = {
  productList: [],
  selectedProduct: null,
};

export const productReducer = (
  state: ProductState = initialProductState,
  action: ProductAction
): ProductState => {
  switch (action.type) {
    case ProductActionTypes.ADD_PRODUCT:
      return {
        ...state,
        productList: [...state.productList, action.payload as Product],
      };
    case ProductActionTypes.UPDATE_PRODUCT: {
      const { id, updates } = action.payload as {
        id: number;
        updates: Partial<Product>;
      };
      return {
        ...state,
        productList: state.productList.map((product) =>
          product.id === id ? { ...product, ...updates } : product
        ),
      };
    }
    case ProductActionTypes.DELETE_PRODUCT: {
      return {
        ...state,
        productList: state.productList.filter(
          (product) => product.id !== action.payload
        ),
      };
    }
    case ProductActionTypes.SET_PRODUCT_LIST:
      return {
        ...state,
        productList: action.payload as Product[],
      };
    case ProductActionTypes.SET_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload as Product,
      };
    default:
      return state;
  }
};
