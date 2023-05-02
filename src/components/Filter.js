import React, { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaSearch } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { useUiContext } from "../context/UiContext";
import {
  SEARCH_PRODUCT,
  REFRESH_PRODUCTS,
  showSearchResult_ON,
  showSearchResult_OFF,
  SET_searchValueCopy,
} from "../actions";
const Filter = ({ numberOfFilteredItem }) => {
  // const [flag, setFlag] = useState(false);
  const { state, dispatch } = useUiContext();
  const inputRef = useRef(null);
  // const [inputValueCopy, setInputValuCopy] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    // setFlag(true);
    dispatch({ type: showSearchResult_ON });
    dispatch({ type: SEARCH_PRODUCT, payload: inputRef.current.value });
    // setInputValuCopy(inputRef.current.value);
    dispatch({ type: SET_searchValueCopy, payload: inputRef.current.value });
    inputRef.current.value = "";
  };
  return (
    <Wrapper>
      <div className="searchANDrefresh">
        <form onSubmit={(e) => submitHandler(e)}>
          <button type="submit">
            <FaSearch />
          </button>
          <input
            required
            ref={inputRef}
            type="search"
            placeholder={`  جستجو در املاک     `}
          />
        </form>
        <div>
          <GrRefresh
            className="refresh"
            onClick={() => {
              // setFlag(false);
              dispatch({ type: showSearchResult_OFF });

              dispatch({ type: REFRESH_PRODUCTS });
            }}
          ></GrRefresh>
        </div>
      </div>
      {state.showSearchResult &&
        (state.products.length ? (
          <div className="searchResult">
            <p>{state.products.length}</p>
            <p>مورد برای </p>
            <p>{state.searchValueCopy}</p>
            <p>یافت شد.</p>
          </div>
        ) : (
          <div className="noResult">موردی یافت نشد.</div>
        ))}
    </Wrapper>
  );
};
const Wrapper = styled.div.attrs({})`
  & {
    form {
      //mt-4 mx-auto md:mr-4
      ${tw`md:w-80 w-[80%]  px-4 flex items-center rounded-md bg-gray-400 text-gray-700 text-xl`}
    }
    input[type="search"] {
      ${tw`bg-transparent border-0 w-80 text-xl  border-transparent`}
    }
    input[type="search"]:focus {
      ${tw`outline-none ring-0`}
    }
    .searchANDrefresh {
      ${tw`  flex  justify-center items-center mt-4`}
    }
    .refresh {
      ${tw`text-3xl h-11 hover:cursor-pointer  pl-2 text-gray-700 `}
    }
    .searchResult {
      ${tw`flex max-h-screen items-center  text-xl mt-4 mr-6 tracking-wider`}
    }
    .searchResult > p:nth-of-type(1) {
      ${tw`ml-2 md:text-2xl text-sm text-yellow-500`}
    }
    .searchResult > p:nth-of-type(3) {
      ${tw`ml-1 mr-1 md:text-xl text-sm text-gray-300 text-yellowmmp`}
    }
    .noResult {
      ${tw`mx-auto md:text-2xl text-sm w-48 min-h-screen mt-4 tracking-widest text-red-300 `}
    }
  }
`;
export default Filter;
