import { createContext, useContext, useState } from "react";
// import { data as initialData } from "../Data/DummyData";

const defaultProviderValues = {};

const AppContext = createContext(defaultProviderValues);

export const AppProvider = ({ children }) => {
  // const [nftData, setNftData] = useState([]);
  const [key, setKey] = useState(0);
  const [keyHis, setKeyHis] = useState(0);
  const [histData, setHistData] = useState([]);
  return (
    <AppContext.Provider
      value={{
        key,
        setKey,
        histData,
        setHistData,
        keyHis,
        setKeyHis,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
