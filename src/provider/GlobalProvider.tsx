import React, { useState } from "react";

export interface GlobalState {
  isSnackBarActive: boolean;
  setIsSnackBarActive: (isSnackBarActive: boolean) => void;
}

export const GlobalContext = React.createContext<GlobalState>({
  isSnackBarActive: false,
  setIsSnackBarActive: () => {},
});

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [isSnackBarActive, setIsSnackBarActive] = useState(false);

  const state: GlobalState = {
    isSnackBarActive,
    setIsSnackBarActive,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalProvider;
