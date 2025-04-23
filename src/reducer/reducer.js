import {
  setProductList,
  addProductToBasket,
  APP_ACTIONS,
  setIsLoading,
} from "./controller";

const { SET_IS_LOADING, ADD_PRODUCT_TO_BASKET, SET_PRODUCT_LIST } = APP_ACTIONS;

export const initialAppReducer = {
  isLoading: false,
  basket: { productList: [] },
  productList: [],
};

export const appReducer = (state, action) => {
  let payload = action.payload;
  switch (action.type) {
    case SET_IS_LOADING:
      return setIsLoading({ state: state, isLoading: payload });
    case ADD_PRODUCT_TO_BASKET:
      return addProductToBasket({ state: state, product: payload });
    case SET_PRODUCT_LIST:
      return setProductList({ state: state, productList: payload });
    default:
      return state;
  }
};
