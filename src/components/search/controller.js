import { setFilteredListAction } from "../../reducer/controller";

export const filterProductList = ({ productList, dispatch, search = "" }) => {
  const filteredList = productList.filter(
    (product) =>
      product.brand.toLocaleLowerCase().includes(search.toLocaleLowerCase()) ||
      product.model.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );

  setFilteredListAction({
    dispatch: dispatch,
    productList: filteredList,
  });
};
