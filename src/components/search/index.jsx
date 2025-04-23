import React, { useContext, useEffect, useState } from "react";
import styles from "./search.module.css";
import { filterProductList } from "./controller";
import { appDispatchContext, appStateContext } from "../../App";

const Search = () => {
  const appState = useContext(appStateContext);
  const dispatch = useContext(appDispatchContext);
  const [text, setText] = useState();

  useEffect(() => {
    filterProductList({
      dispatch: dispatch,
      productList: appState.productList,
      search: text,
    });
  }, [text, appState.productList]);

  const onChange = (value) => {
    setText(value);
  };
  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.searchInput}
        placeholder="Buscar...🔎"
        value={text}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
};

export default Search;
