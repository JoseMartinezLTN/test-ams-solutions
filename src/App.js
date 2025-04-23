import "./App.css";
import { createContext, useContext, useEffect, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "./views/productListPage";
import ProductDetailsPage from "./views/productDetailsPage";
import { appReducer, initialAppReducer } from "./reducer/reducer";
import { getProductList } from "./appController";

export const appDispatchContext = createContext();
export const appStateContext = createContext();

const AppContextProvider = ({ children }) => {
  const [appState, appDispatch] = useReducer(appReducer, initialAppReducer);

  return (
    <appDispatchContext.Provider value={appDispatch}>
      <appStateContext.Provider value={appState}>
        {children}
      </appStateContext.Provider>
    </appDispatchContext.Provider>
  );
};

const AppContent = () => {
  const appState = useContext(appStateContext);
  const dispatch = useContext(appDispatchContext);

  useEffect(() => {
    getProductList({ dispatch: dispatch });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<ProductListPage />} />
        <Route exact path="/detail" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default function App() {
  return (
    <AppContextProvider>
      <AppContent />
    </AppContextProvider>
  );
}
