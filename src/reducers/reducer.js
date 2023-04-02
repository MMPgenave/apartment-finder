import {
  TOGGLE_SIDEBAR,
  Left_Room,
  Right_Room,
  SLIDE,
  NEWLETTER_SUBMISSION,
  LOADINGFALSE,
  LOADINGTRUE,
  ADD_PRODUCT,
  ADD_SINGLE_PRODUCT,
  SINGLE_PRODUCT_LOADING_FALSE,
  SINGLE_PRODUCT_LOADING_TRUE,
  HAVE_ERROR_ON_SINGLE_PRODUCT_LOADING,
  HAVE_NOT_ERROR_ON_SINGLE_PRODUCT_LOADING,
  HAVE_ERROR_ON_TOTAL_PRODUCTS_LOADING,
  HAVE_NOT_ERROR_ON_TOTAL_PRODUCTS_LOADING,
  SEARCH_PRODUCT,
  REFRESH_PRODUCTS,
  showSearchResult_ON,
  showSearchResult_OFF,
  SET_searchValueCopy,
} from "../actions";
import { Rooms_List, Images } from "../utils/constants";

export const Sidebar_reducer = (state, action) => {
  if (action.type === TOGGLE_SIDEBAR) {
    return { ...state, isSidebarOpen: !state.isSidebarOpen };
  }

  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
export const uiReducer = (state, action) => {
  if (action.type === Left_Room) {
    let index = action.first;

    const newRooms = [];
    for (let i = 0; i < 4; i++) {
      if (index === 8) {
        index = -1;
      }
      if (index === 9) {
        index = 0;
      }
      if (index === 10) {
        index = 1;
      }
      if (index === 11) {
        index = 2;
      }
      newRooms.push(Rooms_List[index + 1]);
      index++;
    }
    return { ...state, FourRoom: newRooms };
  }

  if (action.type === Right_Room) {
    let index = action.last;

    const newRooms = [];
    for (let i = 0; i < 4; i++) {
      if (index === 0) {
        index = 9;
      }
      if (index === -1) {
        index = 8;
      }
      if (index === -2) {
        index = 7;
      }
      if (index === -3) {
        index = 6;
      }
      newRooms.unshift(Rooms_List[index - 1]);
      index--;
    }
    console.log(`newRooms:${newRooms} `);
    return { ...state, FourRoom: newRooms };
  }
  if (action.type === SLIDE) {
    const current = state.Image_Stock;
    let index = current.id;
    if (index === 4) {
      index = 0;
    }
    return { ...state, Image_Stock: Images[index] };
  }
  // if (action.type === NEWLETTER_SUBMISSION) {
  //   action.payload.preventDefault();
  //   alert("clicked");
  //   return { ...state };
  // }
  if (action.type === LOADINGFALSE) {
    return { ...state, isLoading: false };
  }
  if (action.type === LOADINGTRUE) {
    return { ...state, isLoading: true };
  }
  if (action.type === ADD_PRODUCT) {
    return { ...state, products: action.payload, productsCopy: action.payload };
  }
  if (action.type === HAVE_ERROR_ON_TOTAL_PRODUCTS_LOADING) {
    return { ...state, isErrorOnTotalProductsLoading: true };
  }
  if (action.type === HAVE_NOT_ERROR_ON_TOTAL_PRODUCTS_LOADING) {
    return { ...state, isErrorOnTotalProductsLoading: false };
  }
  if (action.type === SINGLE_PRODUCT_LOADING_FALSE) {
    return { ...state, singleProductLoading: false };
  }
  if (action.type === SINGLE_PRODUCT_LOADING_TRUE) {
    return { ...state, singleProductLoading: true };
  }
  if (action.type === ADD_SINGLE_PRODUCT) {
    return { ...state, singleProduct: action.payload };
  }
  if (action.type === HAVE_ERROR_ON_SINGLE_PRODUCT_LOADING) {
    return { ...state, isErrorOnSingleProductLoading: true };
  }
  if (action.type === HAVE_NOT_ERROR_ON_SINGLE_PRODUCT_LOADING) {
    return { ...state, isErrorOnSingleProductLoading: false };
  }
  if (action.type === SEARCH_PRODUCT) {
    if (action.payload === "کمتر از 2 ملیارد") {
      const newProducts = state.productsCopy.filter((item) => item.price < 2);
      return { ...state, products: newProducts };
    }
    if (action.payload === "بیشتر از 2 ملیارد") {
      const newProducts = state.productsCopy.filter((item) => item.price > 2);
      return { ...state, products: newProducts };
    }
    const newProducts = state.productsCopy.filter(
      (item) =>
        item.type.includes(action.payload) ||
        item.location.includes(action.payload) ||
        item.description.includes(action.payload)
    );
    return { ...state, products: newProducts };
  }
  if (action.type === showSearchResult_ON) {
    return { ...state, showSearchResult: true };
  }
  if (action.type === showSearchResult_OFF) {
    return { ...state, showSearchResult: false };
  }
  if (action.type === SET_searchValueCopy) {
    return { ...state, searchValueCopy: action.payload };
  }
  if (action.type === REFRESH_PRODUCTS) {
    return { ...state, products: state.productsCopy };
  }
  throw new Error(`this action (${action.type}) did't include in MMP PROGRAMS`);
};
