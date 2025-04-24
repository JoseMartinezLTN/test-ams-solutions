import React from "react";
import styles from "./description.module.css";

const Description = ({ product }) => {
  return (
    <div className={styles.descriptionContainer}>
      <div title={product.brand} className={styles.descriptionLine}>
        {product.brand}
      </div>
      <div title={product.model} className={styles.descriptionLine}>
        {product.model}
      </div>

      <div title={product.price + "€"} className={styles.descriptionLine}>
        {product.price}€
      </div>
      <div title={product.cpu} className={styles.descriptionLine}>
        {product.cpu}
      </div>
      <div title={product.ram} className={styles.descriptionLine}>
        {product.ram}
      </div>
      <div title={product.os} className={styles.descriptionLine}>
        {product.os}
      </div>
      <div title={product.displayResolution} className={styles.descriptionLine}>
        {product.displayResolution}
      </div>
      <div title={product.battery} className={styles.descriptionLine}>
        {product.battery}
      </div>
      <div title={product.primaryCamera} className={styles.descriptionLine}>
        {product.primaryCamera}
      </div>
      <div title={product.secondaryCmera} className={styles.descriptionLine}>
        {product.secondaryCmera}
      </div>
      <div title={product.dimension} className={styles.descriptionLine}>
        {product.dimension}
      </div>
      <div title={product.weight} className={styles.descriptionLine}>
        {product.weight}
      </div>
    </div>
  );
};

export default Description;
