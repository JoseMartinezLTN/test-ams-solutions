const SET_IS_LOADING = "SET_IS_LOADING";
const ADD_PRODUCT_TO_BASKET = "ADD_PRODUCT_TO_BASKET";
const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
const SET_FILTERED_LIST = "SET_FILTERED_LIST";
const SET_SELECTED_ID = "SET_SELECTED_ID";

export const APP_ACTIONS = {
  SET_IS_LOADING: SET_IS_LOADING,
  SET_PRODUCT_LIST: SET_PRODUCT_LIST,
  SET_FILTERED_LIST: SET_FILTERED_LIST,
  SET_SELECTED_ID: SET_SELECTED_ID,
};

//LOADING
export const setIsLoading = ({ state, isLoading }) => {
  let newState = { ...state };

  newState.isLoading = isLoading;

  return newState;
};
export const setIsLoadingAction = ({ dispatch, isLoading }) => {
  dispatch({ type: SET_IS_LOADING, payload: isLoading });
};

//ADD ITEM TO BASKET
export const addProductToBasket = ({ state, number }) => {
  let newState = { ...state };

  newState.basket = number;

  return newState;
};
export const addProductToBasketAction = ({ dispatch, number }) => {
  dispatch({ type: ADD_PRODUCT_TO_BASKET, payload: number });
};

//SET PRODUCTLIST
export const setProductList = ({ state, productList }) => {
  let newState = { ...state };

  newState.productList = productList;
  newState.filteredList = productList;

  return newState;
};
export const setProductListAction = ({ dispatch, productList }) => {
  dispatch({ type: SET_PRODUCT_LIST, payload: productList });
};

//SET FILTEREDLIST
export const setFilteredList = ({ state, productList }) => {
  let newState = { ...state };

  newState.filteredList = productList;

  return newState;
};
export const setFilteredListAction = ({ dispatch, productList }) => {
  dispatch({ type: SET_FILTERED_LIST, payload: productList });
};

//SET SELECTED ID
export const setSelectedId = ({ state, id }) => {
  let newState = { ...state };

  newState.selectedId = id;

  return newState;
};
export const setSelectedIdAction = ({ dispatch, id }) => {
  dispatch({ type: SET_SELECTED_ID, payload: id });
};
