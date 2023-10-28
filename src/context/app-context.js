import { createContext, useContext, useState } from "react";
// import { data as initialData } from "../Data/DummyData";

const defaultProviderValues = {};

const AppContext = createContext(defaultProviderValues);

export const AppProvider = ({ children }) => {
  // const [nftData, setNftData] = useState([]);
  const [key, setKey] = useState([]);
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useApp = () => useContext(AppContext);
