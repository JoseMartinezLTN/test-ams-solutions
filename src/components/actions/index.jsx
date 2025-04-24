import React from "react";
import styles from "./actions.module.css";

const Actions = ({ product, setProduct, addToBasket }) => {
  const onChangeStorage = (value) => {
    const selectedStorage = product.options.storages.find(
      (storage) => storage.code == value
    );
    setProduct({ ...product, selectedStorage: selectedStorage });
  };

  const onChangeColor = (value) => {
    const selectedColor = product.options.colors.find(
      (color) => color.code == value
    );
    setProduct({ ...product, selectedColor: selectedColor });
  };

  const isAllDataSelected = () => {
    return product.selectedColor && product.selectedStorage;
  };

  const onClick = () => {
    if (isAllDataSelected()) addToBasket();
  };

  return (
    <div className={styles.actionsContainer}>
      <select
        className={styles.selectInput}
        onChange={(event) => onChangeStorage(event.target.value)}
      >
        <option selected={!product.selectedStorage} value={undefined}>
          --
        </option>
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
        <option selected={!product.selectedColor} value={undefined}>
          --
        </option>
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
      <div
        className={
          isAllDataSelected()
            ? styles.buttonContainer
            : styles.disabledButtonContainer
        }
        onClick={onClick}
      >
        Añadir al carro
      </div>
    </div>
  );
};

export default Actions;
