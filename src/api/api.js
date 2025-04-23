export const getProductListCall = async () => {
  const myHeaders = new Headers();
  const url = "https://itx-frontend-test.onrender.com/api/product";
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export const getProductCall = async ({ productId }) => {
  const myHeaders = new Headers();
  const url = `https://itx-frontend-test.onrender.com/api/product/${productId}`;
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};

export const addProductToBasketCall = async ({
  productId,
  colorCode,
  storageCode,
}) => {
  const myHeaders = new Headers();
  const url = "https://itx-frontend-test.onrender.com/api/cart";
  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      id: productId,
      colorCode: colorCode,
      storageCode: storageCode,
    }),
  };

  return fetch(url, requestOptions)
    .then((response) => response.json())
    .then((result) => result)
    .catch((error) => error);
};
