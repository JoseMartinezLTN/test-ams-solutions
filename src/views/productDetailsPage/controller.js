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

  setProduct({
    ...product,
    selectedColor: product.options?.colors?.[0],
    selectedStorage: product.options?.storage?.[0],
  });
};

export const addToBasket = async ({ product }) => {
  const response = await middleManCall({
    callFunction: addProductToBasketCall,
    props: {
      productId: product.id,
      colorCode: product.selectedColor.code,
      storageCode: product.selectedStorage.code,
    },
  });

  return response;
};
