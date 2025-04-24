import React, { useContext } from "react";
import { appDispatchContext } from "../../App";
import Image from "../image";
import styles from "./item.module.css";
import { setSelectedIdAction } from "../../reducer/controller";
import { useNavigate } from "react-router-dom";

const Item = ({ product }) => {
  const dispatch = useContext(appDispatchContext);
  const navigate = useNavigate();

  const onClickItem = () => {
    setSelectedIdAction({
      dispatch: dispatch,
      id: product.id,
    });
  };
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
