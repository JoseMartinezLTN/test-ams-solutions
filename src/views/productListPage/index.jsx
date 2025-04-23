import React, { useContext, useState } from "react";
import Header from "../../components/header";
import Search from "../../components/search";
import { appDispatchContext, appStateContext } from "../../App";
import Item from "../../components/item";
import styles from "./productListPage.module.css";

const ProductListPage = () => {
  const appState = useContext(appStateContext);
  const dispatch = useContext(appDispatchContext);

  return (
    <div className={styles.mainContainer}>
      <Header />
      <div className={styles.bodyContainer}>
        <div style={{ marginLeft: "auto" }}>
          <Search />
        </div>

        <div className={styles.itemListContainer}>
          {appState.filteredList.map((product, index) => {
            return <Item key={index} product={product} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
