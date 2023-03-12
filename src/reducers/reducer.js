import { TOGGLE_SIDEBAR } from "../actions";

export const Sidebar_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
export const uiReducer = (state, action) => {
  return state;
  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
