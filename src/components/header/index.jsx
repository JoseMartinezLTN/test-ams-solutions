import React, { useContext } from "react";
import styles from "./header.module.css";
import { appDispatchContext, appStateContext } from "../../App";
import { setSelectedIdAction } from "../../reducer/controller";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const appState = useContext(appStateContext);
  const dispatch = useContext(appDispatchContext);
  const navigate = useNavigate();

  const selectedProduct = appState.productList.find(
    (product) => product.id === appState.selectedId
  );

  const onClick = () => {
    if (selectedProduct) {
      navigate("/");
      setSelectedIdAction({ dispatch: dispatch });
    }
  };

  return (
    <div className={styles.headerContainer}>
      <div className={styles.antTrailContainer}>
        <div
          onClick={onClick}
          className={
            selectedProduct ? styles.unSelectedAnt : styles.selectedAnt
          }
        >
          {"Lista"}
        </div>
        {selectedProduct && (
          <div className={styles.selectedAnt}>{`>>${selectedProduct.id}`}</div>
        )}
      </div>
      <div className={styles.basketContainer}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Header;
