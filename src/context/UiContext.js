import React, { useContext, useReducer } from "react";
import { Rooms_List,Images } from "../utils/constants";
import { uiReducer } from "../reducers/reducer";
const ui_context = React.createContext();
const initial_state = {
  FourRoom: Rooms_List.slice(0, 4),
  Image_Stock: Images[0],//Image_Stock used for Slider component
};

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
