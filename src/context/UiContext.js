import React, { useContext, useReducer, useEffect } from "react";
import { Rooms_List, Images } from "../utils/constants";
import { uiReducer } from "../reducers/reducer";
import axios from "axios";
import {
  LOADINGFALSE,
  LOADINGTRUE,
  ADD_PRODUCT,
  ADD_SINGLE_PRODUCT,
  SINGLE_PRODUCT_LOADING_TRUE,
  SINGLE_PRODUCT_LOADING_FALSE,
  HAVE_ERROR_ON_SINGLE_PRODUCT_LOADING,
  HAVE_NOT_ERROR_ON_SINGLE_PRODUCT_LOADING,
  HAVE_ERROR_ON_TOTAL_PRODUCTS_LOADING,
  HAVE_NOT_ERROR_ON_TOTAL_PRODUCTS_LOADING,
} from "../actions";
const url = "https://jovial-klepon-acf62c.netlify.app/api/2-basic-api";
const ui_context = React.createContext();
const initial_state = {
  isLoading: true,
  FourRoom: Rooms_List.slice(0, 4),
  Image_Stock: Images[0], //Image_Stock used for Slider component
  products: [],
  productsCopy: [],
  isErrorOnTotalProductsLoading: false,
  singleProductLoading: false,
  singleProduct: {},
  isErrorOnSingleProductLoading: false,
  showSearchResult:false,
  searchValueCopy:"",
};
export const UiContext = ({ children }) => {
  // get the data from url
  async function getData() {
    try {
      const response = await axios.get(url);
      dispatch({ type: LOADINGFALSE });
      dispatch({ type: HAVE_NOT_ERROR_ON_TOTAL_PRODUCTS_LOADING });
      dispatch({ type: ADD_PRODUCT, payload: response.data });
      // console.log(`fetched data:${JSON.stringify(response.data)}`);
    } catch (error) {
      console.log("محصولات بارگذاری نشدند!");
      dispatch({ type: HAVE_ERROR_ON_TOTAL_PRODUCTS_LOADING });
    }
  }
  //Fetch single product
  async function getSingleProduct(url) {
    try {
      dispatch({ type: SINGLE_PRODUCT_LOADING_TRUE });
      // dispatch({ type: HAVE_NOT_ERROR_ON_SINGLE_PRODUCT_LOADING });

      const response = await axios.get(url);
      const singleProduct = response.data;
      dispatch({ type: ADD_SINGLE_PRODUCT, payload: singleProduct });
      dispatch({ type: SINGLE_PRODUCT_LOADING_FALSE });
    } catch (error) {
      dispatch({ type: SINGLE_PRODUCT_LOADING_FALSE });
      dispatch({ type: HAVE_ERROR_ON_SINGLE_PRODUCT_LOADING });
    }
  }
  useEffect(() => {
    getData();
  }, []);
  const [state, dispatch] = useReducer(uiReducer, initial_state);
  return (
    <ui_context.Provider value={{ state, dispatch, getSingleProduct }}>
      {children}
    </ui_context.Provider>
  );
};

export const useUiContext = () => {
  return useContext(ui_context);
};
