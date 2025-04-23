import React from "react";
import styles from "./image.module.css";

const Image = ({ url }) => {
  return <img className={styles.imageContainer} src={url} />;
};

export default Image;
