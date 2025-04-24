import React from "react";
import styles from "./actions.module.css";

const Actions = ({ product, setProduct, addToBasket }) => {
  const onChangeStorage = (value) => {
    const selectedStorage = product.options.storages.find(
      (storage) => storage.code === value
    );
    setProduct({ ...product, selectedStorage: selectedStorage });
  };

  const onChangeColor = (value) => {
    const selectedColor = product.options.colors.find(
      (color) => color.code === value
    );
    setProduct({ ...product, selectedColor: selectedColor });
  };

  const onClick = () => {
    addToBasket();
  };

  return (
    <div className={styles.actionsContainer}>
      <select
        className={styles.selectInput}
        onChange={(event) => onChangeStorage(event.target.value)}
      >
        {product.options?.storages?.map((storage) => {
          return (
            <option
              selected={storage.code === product.selectedStorage?.code}
              value={storage.code}
            >
              {storage.name}
            </option>
          );
        })}
      </select>
      <select
        className={styles.selectInput}
        onChange={(event) => onChangeColor(event.target.value)}
      >
        {product.options?.colors?.map((color) => {
          return (
            <option
              selected={color.code === product.selectedColor?.code}
              value={color.code}
            >
              {color.name}
            </option>
          );
        })}
      </select>
      <div className={styles.buttonContainer} onClick={onClick}>
        Añadir al carro
      </div>
    </div>
  );
};

export default Actions;
