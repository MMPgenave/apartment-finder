import React, { useContext, useReducer } from "react";
import { Rooms_List } from "../utils/constants";
import { uiReducer } from "../reducers/reducer";
const ui_context = React.createContext();
const initial_state = { FourRoom: Rooms_List.slice(0, 4) };

export const UiContext = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, initial_state);
  return (
    <ui_context.Provider value={{ state, dispatch }}>
      {children}
    </ui_context.Provider>
  );
};

export const useUiContext = () => {
  return useContext(ui_context);
};
