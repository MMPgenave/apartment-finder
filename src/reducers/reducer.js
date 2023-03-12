import { TOGGLE_SIDEBAR, Left_Room, Right_Room } from "../actions";
import { Rooms_List } from "../utils/constants";

export const Sidebar_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
export const uiReducer = (state, action) => {
  if (action.type === Left_Room) {
    let FirstElement=action.first;
    let LastElement=action.last;
    if(LastElement==8){
      FirstElement=0;
      LastElement=3;
    }
    const newRooms = Rooms_List.slice(FirstElement, LastElement + 1);
    console.log(`newRooms:${newRooms} `);
    return { ...state, FourRoom: newRooms };
  }
  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
