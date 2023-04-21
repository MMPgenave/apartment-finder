import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { LabelContent } from "../utils/constants";
import { useUiContext } from "../context/UiContext";
import { useSidebarContext } from "../context/SidebarContext";
import {
  Left_Room,
  Right_Room,
  SEARCH_PRODUCT,
  showSearchResult_ON,
  showSearchResult_OFF,
  SET_searchValueCopy,
  TOGGLE_SIDEBAR,
} from "../actions";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
function Home() {
  const { state, dispatch } = useUiContext();
  const { state: STATE, dispatch: DISPATCH } = useSidebarContext();
  // const dispatch_from_sidebarContext=value.dispatch;
  return (
    <HomeContainer
      onClick={() => {
        if (STATE.isSidebarOpen) {
          DISPATCH({ type: TOGGLE_SIDEBAR });
        }
      }}
      className={STATE.isSidebarOpen && "opacity-50"}
    >
      <div className="containerrr">
        <div className="main-content">
          <div className="title">
            <h1>خانه رویایی خودت رو انتخاب کن</h1>
            <div className="btnss">
              <Link to="/products" className="btn-link">
                <button type="button">شروع کن</button>
              </Link>
              <a
                href="https://kilid.com/mag/buy-and-rent-advice/buying-and-selling-home/4205/"
                target="_blank"
                className="btn-link"
              >
                <button type="button">مطالعه کن </button>
              </a>
            </div>
          </div>
          <section className="slider">
            <Slider />
          </section>
        </div>

        <div className="label">
          {LabelContent.map((item) => {
            const { id, label, labelChildren } = item;
            return (
              <main key={id} className="dropdown">
                <button className="dropbtn">
                  {label}
                  <p>
                    <FaAngleDown />
                  </p>
                </button>
                <main className="dropdown-content">
                  {labelChildren.map((element) => {
                    const { id, text } = element;

                    return (
                      <Link
                        key={id}
                        to="/products"
                        onClick={() => {
                          dispatch({
                            type: SEARCH_PRODUCT,
                            payload: text,
                          });
                          dispatch({ type: showSearchResult_ON });
                          dispatch({
                            type: SET_searchValueCopy,
                            payload: text,
                          });
                        }}
                      >
                        {text}
                      </Link>
                    );
                  })}
                </main>
              </main>
            );
          })}

          <Link to="/products" className="reserve-btn">
            {" "}
            الان رزرو کن{" "}
          </Link>
        </div>
      </div>
      <div className="bottom-section">
        <section className="top-sec">
          <h2>خانه های پیشنهادی</h2>
          <section className="icons">
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: Right_Room,
                  last: state.FourRoom[state.FourRoom.length - 1].id - 1,
                });
              }}
            >
              <FaAngleRight />
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: Left_Room,
                  first: state.FourRoom[0].id - 1,
                });
              }}
            >
              <FaAngleLeft />
            </button>
          </section>
        </section>
        <section className="bottom-sec">
          {state.FourRoom.map((room) => {
            const { id, price, location, type } = room;
            return (
              <Link to={`/product/${id}`} key={id} className="room">
                <h3>{type}</h3>
                <section className="room-details">
                  <p>{location}</p>
                  <h5>{price} ملیارد تومان</h5>
                </section>
              </Link>
            );
          })}
        </section>
      </div>
      <NewsLetter />
    </HomeContainer>
  );
}
const HomeContainer = styled.main.attrs({})`
  & {
    .containerrr {
      //flex justify-center items-baseline mx-auto w-screen static
      ${tw`w-[97%] md:w-[80%] md:h-[25rem] h-[30rem]  mx-auto relative md:mt-4  `}
    }
    .main-content {
      //w-full sm:p-4
      ${tw`flex flex-col-reverse justify-between items-center md:flex-row rounded-xl  bg-gray-800 `}
    }
    .title {
      //w-1/2 h-1/2 flex flex-col
      ${tw`  md:w-1/2  bg-gray-800 rounded-r-xl `}
    }
    .slider {
      //h-1/2 max-h-60 max-w-[75%]  h-1/2  sm:w-[50%] sm:h-fit lg:max-w-full lg:h-fit
      ${tw` h-full md:w-3/4 w-full overflow-hidden rounded-lg`}
    }
    h1 {
      ${tw`md:text-[3rem] md:mr-20 md:ml-20 md:mt-10 text-gray-50 mb-6 mt-6 text-3xl md:leading-relaxed md:w-[80%] `}
    }
    .btnss {
      ${tw` flex justify-start mt-16 md:mr-20 md:ml-16  md:h-10 w-[90%] md:w-96 h-8 bg-gray-800 `}
    }
    .btn-link {
      ${tw` px-4 py-2 pb-3 mr-6 w-36 md:w-48 md:px-5 text-center md:py-2 text-sm  rounded-lg bg-opacity-70  `}
    }
    .btn-link:nth-of-type(1) {
      ${tw`bg-orangemmp hover:bg-gray-200 hover:text-orangemmp`}
    }
    .btn-link:nth-of-type(2) {
      ${tw`bg-gray-200 text-gray-900 hover:bg-gray-700 hover:text-gray-200`}
    }
    .label {
      ${tw`flex flex-row justify-between w-[89%] h-[6rem] mx-auto  rounded-lg absolute top-[91%] left-[6%]  bg-gray-700 bg-opacity-70`}
    }

    .dropdown {
      ${tw`text-xs overflow-hidden mr-2 mt-2 lg:mr-24 lg:text-lg text-gray-300`}
    }
    .dropbtn {
      ${tw`flex  items-center justify-between cursor-default`}
    }

    .dropdown:hover .dropbtn > p {
      ${tw`rotate-180`}
    }
    .dropdown-content {
      ${tw`hidden absolute z-10`}
    }
    .dropdown:hover .dropdown-content {
      ${tw` flex flex-col justify-center mt-2`}
    }
    .dropdown-content a {
      ${tw`block flex-none mb-1 hover:text-yellowmmp [text-decoration: none] [text-align: right] lg:text-sm`}
    }
    .reserve-btn {
      ${tw`bg-orangemmp opacity-70 text-gray-50 hover:bg-gray-100 hover:text-yellowmmp  flex justify-center items-center px-3 text-center rounded-l-lg lg:px-8 lg:text-lg w-auto`}
    }
    .bottom-section {
      ${tw`w-[95%] h-[28rem]  md:h-[12rem] mx-auto mt-14 pt-4  mb-12 bg-transparent `}
    }
    .top-sec {
      ${tw`flex justify-between mt-3 mb-2`}
    }
    .top-sec > h2 {
      ${tw` text-gray-50 text-3xl lg:mr-2 tracking-wider `}
    }
    .icons {
      ${tw`ml-2 flex flex-col sm:flex-row items-center text-3xl justify-between sm:w-16`}
    }
    .icons > button {
      ${tw`hover:text-yellowmmp  -rotate-90 sm:rotate-0`}
    }
    .icons > p {
      ${tw`bg-gray-500 rounded-lg`}
    }
    .bottom-sec {
      ${tw`flex justify-between  mx-auto flex-row  flex-wrap  w-[99%]  mt-2  md:mr-2`}
    }
    .room {
      ${tw` w-80 h-20 text-lg rounded-xl bg-opacity-70  mt-2`}
    }
    .room:first-of-type {
      ${tw`bg-gray-400  `}
    }
    .room:nth-of-type(2) {
      ${tw`bg-orangemmp  `}
    }
    .room:nth-of-type(3) {
      ${tw`bg-limemmp  `}
    }
    .room:nth-of-type(4) {
      ${tw`bg-gray-700   `}
    }
    .room-details {
      ${tw`flex justify-between mr-3 ml-5`}
    }
    .room > h3 {
      ${tw`mt-1 mr-3 text-gray-300 `}
    }
    .room-details > h5 {
      ${tw`bg-gray-800 border-none rounded-lg py-1 px-2 text-lg`}
    }
    .room-details > p {
      ${tw`  text-gray-200 text-lg`}
    }
  }
`;
export default Home;
