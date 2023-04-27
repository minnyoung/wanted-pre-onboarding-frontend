import React, { useState } from "react";

export interface GlobalState {
  isSnackBarActive: boolean;
  setIsSnackBarActive: (isSnackBarActive: boolean) => void;
  fetchState: string;
  setFetchState: (fetchState: string) => void;
  fetchMessage: string;
  setFetchMessage: (fetchMessage: string) => void;
}

export const GlobalContext = React.createContext<GlobalState>({
  isSnackBarActive: false,
  setIsSnackBarActive: () => {},
  fetchState: "",
  setFetchState: () => {},
  fetchMessage: "",
  setFetchMessage: () => {},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isSnackBarActive, setIsSnackBarActive] = useState(false);
  const [fetchState, setFetchState] = useState("");
  const [fetchMessage, setFetchMessage] = useState("");

  const state: GlobalState = {
    isSnackBarActive,
    setIsSnackBarActive,
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
