import React from "react";
import styles from "./description.module.css";

const Description = ({ product }) => {
  return (
    <div className={styles.descriptionContainer}>
      <div>{product.brand}</div>
      <div>{product.model}</div>
      <div>{product.price}€</div>
      <div>{product.cpu}</div>
      <div>{product.ram}</div>
      <div>{product.os}</div>
      <div>{product.displayResolution}</div>
      <div>{product.battery}</div>
      <div>{product.primaryCamera}</div>
      <div>{product.secondaryCmera}</div>
      <div>{product.dimension}</div>
      <div>{product.weight}</div>
    </div>
  );
};

export default Description;
