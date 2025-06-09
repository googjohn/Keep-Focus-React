import React, { useState, useContext, createContext } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState('focus-on');

  const updateSelected = (event) => {
    const elementName = event.target.name
    setSelected(elementName)
  }

  const updateModalActive = () => {
    setModalActive(modalState => !modalState)
  }

  return (
    <AppContext.Provider value={{ modalActive, updateModalActive, selected, updateSelected }}>
      {children}
    </AppContext.Provider>
  )

}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used withit an AppContext')
  }
  return context;
}

