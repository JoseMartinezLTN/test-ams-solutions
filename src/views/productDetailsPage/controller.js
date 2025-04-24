import {
  addProductToBasketCall,
  getProductCall,
  middleManCall,
} from "../../api/api";
import { isTimestampOlderThan1Hour } from "../../appController";
import { addProductToBasketAction } from "../../reducer/controller";

export const getProduct = async ({ selectedId, setProduct }) => {
  const productFromStorage = JSON.parse(localStorage.getItem(selectedId));
  let product;
  if (
    !productFromStorage ||
    isTimestampOlderThan1Hour(productFromStorage.timestamp)
  ) {
    product = await middleManCall({
      callFunction: getProductCall,
      props: { productId: selectedId },
    });

    localStorage.setItem(
      product.id,
      JSON.stringify({ timestamp: Date.now(), value: product })
    );
  } else {
    product = productFromStorage.value;
  }

  setProduct({
    ...product,
    selectedColor: product.options?.colors?.[0],
    selectedStorage: product.options?.storages?.[0],
  });
};

export const addToBasket = async ({ product, dispatch }) => {
  const response = await middleManCall({
    callFunction: addProductToBasketCall,
    props: {
      productId: product.id,
      colorCode: product.selectedColor.code,
      storageCode: product.selectedStorage.code,
    },
  });
  addProductToBasketAction({
    dispatch: dispatch,
    number: response.count,
  });
  localStorage.setItem(
    "basket",
    JSON.stringify({ timestamp: Date.now(), value: response.count })
  );
};
