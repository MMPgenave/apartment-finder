import { TOGGLE_SIDEBAR } from "../actions";

export const Sidebar_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }
  throw new Error("this action did't include in MMP PROGRAMS");
};
