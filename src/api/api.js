export const getProductListCall = async () => {
  const myHeaders = new Headers();
  const url = "/api/product";
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
  const url = `/api/product/${productId}`;
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
  myHeaders.append("Content-Type", "application/json");
  const url = "/api/cart";
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

export const middleManCall = async ({ callFunction, props }) => {
  let response = await callFunction(props);

  if (response?.error) {
    let error = {
      isHandledError: false,
      message: "Fallo de conexión",
    };

    if (!error.isHandledError) {
      alert(error.message);
      window.location.replace("/");
    }
    return error;
  } else {
    return response;
  }
};
