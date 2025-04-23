import React, { useContext } from "react";
import { appDispatchContext } from "../../App";
import Image from "../image";
import styles from "./item.module.css";

const Item = ({ product }) => {
  const dispatch = useContext(appDispatchContext);

  const onClickItem = () => {};
  return (
    <div onClick={onClickItem} className={styles.itemContainer}>
      <Image url={product.imgUrl} />
      <div className={styles.detailsContainer}>
        <div className={styles.itemBrand}>{product.brand}</div>
        <div className={styles.itemModel}>{product.model}</div>
        <div>{`${product.price}€`}</div>
      </div>
    </div>
  );
};

export default Item;
