import { getProductListCall, middleManCall } from "./api/api";
import { setProductListAction } from "./reducer/controller";

export const getProductList = async ({ dispatch }) => {
  const productList = await middleManCall({
    callFunction: getProductListCall,
  });
  setProductListAction({
    dispatch: dispatch,
    productList: productList,
  });
};
