import React, { useState } from "react";

export interface GlobalState {
  isToastActive: boolean;
  setIsToastActive: (isToastActive: boolean) => void;
  fetchState: string;
  setFetchState: (fetchState: string) => void;
  fetchMessage: string;
  setFetchMessage: (fetchMessage: string) => void;
}

export const GlobalContext = React.createContext<GlobalState>({
  isToastActive: false,
  setIsToastActive: () => {},
  fetchState: "",
  setFetchState: () => {},
  fetchMessage: "",
  setFetchMessage: () => {},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isToastActive, setIsToastActive] = useState(false);
  const [fetchState, setFetchState] = useState("");
  const [fetchMessage, setFetchMessage] = useState("");

  const state: GlobalState = {
    isToastActive,
    setIsToastActive,
    fetchState,
    setFetchState,
    fetchMessage,
    setFetchMessage,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
