import React, { useContext, useReducer } from "react";
const ui_context = React.createContext();
const initial_state = {};
import { uiReducer } from "../reducers/reducer";
function UiContext({ children }) {
  const [state, dispatch] = useReducer(uiReducer, initial_state);
  return (
    <ui_context.Provider value={{ state, dispatch }}>
      {children}
    </ui_context.Provider>
  );
}

export default UiContext;
export const useUiContext = () => {
  return useContext(ui_context);
};
