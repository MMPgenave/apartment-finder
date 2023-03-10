import React from "react";
import { useReducer } from "react";
import { Sidebar_reducer } from "../reducers/reducer";
export const Sidebar_Context = React.createContext();
const initialState = {
  isSidebarOpen: false,
};
export const SidebarContext = ({ children }) => {
  const [state, dispatch] = useReducer(Sidebar_reducer, initialState);
  return (
    <Sidebar_Context.Provider value={{ state, dispatch }}>
      {children}
    </Sidebar_Context.Provider>
  );
};
