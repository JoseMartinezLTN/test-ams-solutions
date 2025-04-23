import { getProductListCall } from "./api/api";
import { setProductListAction } from "./reducer/controller";

export const getProductList = async ({ dispatch }) => {
  const productList = await getProductListCall();

  setProductListAction({
    dispatch: dispatch,
    productList: productList,
  });
};
