import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/header";
import Description from "../../components/description";
import Actions from "../../components/actions";
import Image from "../../components/image";
import { appDispatchContext, appStateContext } from "../../App";
import styles from "./productDetailPage.module.css";
import { useNavigate } from "react-router-dom";
import { addToBasket, getProduct } from "./controller";

const ProductDetailsPage = () => {
  const appState = useContext(appStateContext);
  const dispatch = useContext(appDispatchContext);
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState();

  useEffect(() => {
    if (appState.selectedId)
      getProduct({
        selectedId: appState.selectedId,
        setProduct: setSelectedProduct,
      });
  }, []);

  useEffect(() => {
    !appState.selectedId && navigate("/");
  }, [appState.selectedId]);

  const addProductToBasket = () => {
    addToBasket({
      product: selectedProduct,
      dispatch: dispatch,
    });
  };

  return (
    <div className={styles.pageContainer}>
      <Header />
      <div className={styles.productDetailContainer}>
        <div className={styles.imageContainer}>
          <Image url={selectedProduct?.imgUrl} />
        </div>
        {selectedProduct && (
          <div className={styles.descriptionContainer}>
            <Description product={selectedProduct} />
            <Actions
              product={selectedProduct}
              setProduct={setSelectedProduct}
              addToBasket={addProductToBasket}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsPage;
