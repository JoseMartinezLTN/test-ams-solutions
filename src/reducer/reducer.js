import {
  setProductList,
  addProductToBasket,
  APP_ACTIONS,
  setIsLoading,
  setFilteredList,
} from "./controller";

const {
  SET_IS_LOADING,
  ADD_PRODUCT_TO_BASKET,
  SET_PRODUCT_LIST,
  SET_FILTERED_LIST,
} = APP_ACTIONS;

export const initialAppReducer = {
  isLoading: false,
  basket: { productList: [] },
  productList: [],
  filteredList: [],
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
    case SET_FILTERED_LIST:
      return setFilteredList({ state: state, productList: payload });
    default:
      return state;
  }
};
