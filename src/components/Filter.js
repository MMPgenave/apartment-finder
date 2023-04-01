import React, { useRef, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaSearch } from "react-icons/fa";
import { GrRefresh } from "react-icons/gr";
import { useUiContext } from "../context/UiContext";
import { SEARCH_PRODUCT, REFRESH_PRODUCTS } from "../actions";
const Filter = ({ numberOfFilteredItem }) => {
  const [flag, setFlag] = useState(false);
  const { state, dispatch } = useUiContext();
  const inputRef = useRef(null);
  const [inputValueCopy, setInputValuCopy] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setFlag(true);
    dispatch({ type: SEARCH_PRODUCT, payload: inputRef.current.value });
    setInputValuCopy(inputRef.current.value);
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
            placeholder={`  جستجو در محصولات     `}
          />
        </form>
        <div>
        <GrRefresh
          className="refresh"
          onClick={() => {
            setFlag(false);
            dispatch({ type: REFRESH_PRODUCTS });
          }}
        ></GrRefresh>
        </div>
       
      </div>
      {flag &&
        (numberOfFilteredItem ? (
          <div className="searchResult">
            <p>{numberOfFilteredItem}</p>
            <p>مورد برای </p>
            <p>{inputValueCopy}</p>
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
    form {//mt-4 mx-auto md:mr-4
      ${tw`w-80  px-4 flex items-center rounded-r-md bg-gray-400 text-gray-700 text-xl`}
    }
    input[type="search"] {
      ${tw`bg-transparent border-0 w-80  border-transparent`}
    }
    input[type="search"]:focus {
      ${tw`outline-none`}
    }
    .searchANDrefresh{
      ${tw`  flex  justify-center items-center mt-4`}
    }
    .refresh {
      ${tw`text-3xl rounded-l-md h-10 hover:cursor-pointer pl-2 text-gray-700 bg-gray-400`}
    }
    .searchResult {
      ${tw`flex max-h-screen items-center  text-xl mt-4 mr-6 tracking-wider`}
    }
    .searchResult > p:nth-of-type(1) {
      ${tw`ml-2 text-2xl text-yellow-500`}
    }
    .searchResult > p:nth-of-type(3) {
      ${tw`ml-1 mr-1 text-3xl text-gray-300 tracking-widest`}
    }
    .noResult {
      ${tw`mx-auto text-2xl w-48 min-h-screen mt-4 tracking-widest text-red-300 `}
    }
  }
`;
export default Filter;
