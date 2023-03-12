import React from "react";
import { useReducer, useContext } from "react";
import { Sidebar_reducer } from "../reducers/reducer";
const Sidebar_Context = React.createContext();
const initialState = {
  isSidebarOpen: true,
};
export const SidebarContext = ({ children }) => {
  const [state, dispatch] = useReducer(Sidebar_reducer, initialState);
  return (
    <Sidebar_Context.Provider value={{ state, dispatch }}>
      {children}
    </Sidebar_Context.Provider>
  );
};
//create my custom Hoke
export const useSidebarContext = () => {
  return useContext(Sidebar_Context);
};
