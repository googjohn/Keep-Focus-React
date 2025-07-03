import React, { useState } from "react";
import { AppContext } from "./UseAppContext";

export const AppContextProvider = ({ children }) => {
  const [modalActive, setModalActive] = useState(false);
  const [selected, setSelected] = useState('focus-on'); // focus-on | short-break | long-break
  // const [timeleft, setTimeleft] = useState(0);
  // const [isActive, setIsActive] = useState(false);


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
