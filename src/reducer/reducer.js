import {
  setProductList,
  addProductToBasket,
  APP_ACTIONS,
  setIsLoading,
  setFilteredList,
  setSelectedId,
} from "./controller";

const {
  SET_IS_LOADING,
  ADD_PRODUCT_TO_BASKET,
  SET_PRODUCT_LIST,
  SET_FILTERED_LIST,
  SET_SELECTED_ID,
} = APP_ACTIONS;

export const initialAppReducer = {
  isLoading: false,
  basket: 0,
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
    case SET_SELECTED_ID:
      return setSelectedId({ state: state, id: payload });
    default:
      return state;
  }
};
