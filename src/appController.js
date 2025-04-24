import { getProductListCall, middleManCall } from "./api/api";
import { setProductListAction } from "./reducer/controller";

export const getProductList = async ({ dispatch }) => {
  const productListFromStorage = JSON.parse(
    localStorage.getItem("productList")
  );
  let productList;

  if (isTimestampOlderThan1Hour(productListFromStorage?.timestamp)) {
    productList = await middleManCall({
      callFunction: getProductListCall,
    });
    localStorage.setItem(
      "productList",
      JSON.stringify({ timestamp: Date.now(), value: productList })
    );
  } else {
    productList = productListFromStorage.value;
  }

  setProductListAction({
    dispatch: dispatch,
    productList: productList,
  });
};

export const isTimestampOlderThan1Hour = (timestamp = 0) => {
  const now = Date.now();
  return timestamp < now - 3600000;
};
