import { useContext, createContext } from "react";

export const AppContext = createContext(null);

export const UseAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('UseAppContext must be used withing AppContextProvider')
  }

  return context
}