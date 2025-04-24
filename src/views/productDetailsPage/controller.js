import {
  addProductToBasketCall,
  getProductCall,
  middleManCall,
} from "../../api/api";

export const getProduct = async ({ selectedId, setProduct }) => {
  const product = await middleManCall({
    callFunction: getProductCall,
    props: { productId: selectedId },
  });

  setProduct(product);
};

export const addToBasket = async ({ product }) => {
  const response = await middleManCall({
    callFunction: addProductToBasketCall,
    props: { productId: product.id, colorCode: "", storageCode: "" },
  });

  return response;
};
