import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { Rooms_List } from "../utils/constants";
import { useUiContext } from "../context/UiContext";
import { Left_Room, Right_Room } from "../actions";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
function Home() {
  const { state, dispatch } = useUiContext();

  return (
    <HomeContainer>
      <div className="containerrr">
        <div className="main-content">
          <div className="title">
            <h1>خانه رویایی خودت رو انتخاب کن</h1>
            <div className="btnss">
              <Link to="/faq" className="btn-link">
                <button type="button">شروع کن</button>
              </Link>
              <Link to="/features" className="btn-link">
                <button type="button">مطالعه کن </button>
              </Link>
            </div>
          </div>
          <section className="slider">
            <Slider />
          </section>
        </div>

        <div className="label">
          <main className="dropdown">
            <button className="dropbtn">
              موقعیت
              <p>
                <FaAngleDown />
              </p>
            </button>
            <main className="dropdown-content">
              <a href="#">تهران</a>
              <a href="#">کردستان</a>
            </main>
          </main>
          <main className="dropdown">
            <button className="dropbtn">
              متراژ
              <p>
                <FaAngleDown />
              </p>
            </button>
            <main className="dropdown-content">
              <a href="#">کمتر از 150 متر</a>
              <a href="#">بیشتر از 150 متر</a>
            </main>
          </main>
          <main className="dropdown">
            <button className="dropbtn">
              طبقه بندی شما
              <p>
                <FaAngleDown />
              </p>
            </button>
            <main className="dropdown-content">
              <a href="#">2 خوابه</a>
              <a href="#">سویت</a>
            </main>
          </main>

          <button className="reserve-btn"> الان رزرو کن </button>
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
              <section key={id} className="room">
                <h3>{type}</h3>
                <section className="room-details">
                  <p>{location}</p>
                  <h5>{price} ملیارد تومان</h5>
                </section>
              </section>
            );
          })}
        </section>
      </div>
    </HomeContainer>
  );
}
const HomeContainer = styled.main.attrs({})`
  & {
    .containerrr {
      //flex justify-center items-baseline mx-auto w-screen static
      ${tw`w-[97%] h-[22rem] mx-auto static  `}
    }
    .main-content {
      //w-full
      ${tw`flex flex-col-reverse justify-between items-center sm:flex-row rounded-xl p-4 bg-gray-800 `}
    }
    .title {
      //w-1/2 h-1/2
      ${tw`sm:mr-10 sm:mt-1 mt-2 mb-2  flex flex-col sm:justify-between  bg-gray-800  `}
    }
    .slider {
      //h-1/2 max-h-60 max-w-[75%]  h-1/2  sm:w-[50%] sm:h-fit lg:max-w-full lg:h-fit
      ${tw`  `}
    }
    h1 {
      ${tw`sm:text-[3rem] text-2xl sm:leading-relaxed lg:w-[90%] `}
    }
    .btnss {
      ${tw`flex  justify-between mt-2 sm:mr-20 sm:mb-20 sm:h-10 w-36 sm:w-48 h-8 bg-gray-800 `}
    }
    .btn-link {
      ${tw` px-3 py-1 sm:px-5 text-center sm:py-2 sm:text-sm text-xs  rounded-3xl bg-gray-700 bg-opacity-70 text-gray-100 hover:bg-gray-600 hover:text-slate-200`}
    }

    .label {
      ${tw`flex flex-row justify-between  w-[67%] h-[6rem] mx-auto  rounded-lg absolute top-[45%] left-[16%] sm:left-[17%] bg-gray-700 bg-opacity-70`}
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
      ${tw` flex flex-col justify-center`}
    }
    .dropdown-content a {
      ${tw`block flex-none hover:text-yellow-500  [text-decoration: none] [text-align: right] lg:text-sm`}
    }
    .reserve-btn {
      ${tw`bg-yellow-400 opacity-70 text-gray-700 w-12 p-2 rounded-l-lg lg:px-8 lg:text-lg lg:w-auto`}
    }
    .bottom-section {
      ${tw`w-[95%] h-[20rem] mx-auto mt-12 pt-4  mb-12 bg-transparent `}
    }
    .top-sec {
      ${tw`flex justify-between mt-3`}
    }
    .top-sec > h2 {
      ${tw` lg:text-3xl lg:mr-2 `}
    }
    .icons {
      ${tw`ml-2 flex flex-col sm:flex-row items-center text-3xl justify-between sm:w-16`}
    }
    .icons > button {
      ${tw`hover:text-yellow-500  -rotate-90 sm:rotate-0`}
    }
    .icons > p {
      ${tw`bg-gray-500 rounded-lg`}
    }
    .bottom-sec {
      ${tw`flex justify-between flex-row flex-wrap  mt-2 mr-2`}
    }
    .room {
      ${tw` w-64 h-14 text-sm rounded-xl bg-opacity-70  mt-1`}
    }
    .room:first-of-type {
      ${tw`bg-gray-400  `}
    }
    .room:nth-of-type(2) {
      ${tw`bg-gray-500  `}
    }
    .room:nth-of-type(3) {
      ${tw`bg-gray-600  `}
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
      ${tw`bg-gray-800 border-none rounded-sm py-1 px-2 text-xs`}
    }
    .room-details > p {
      ${tw`  text-gray-200 text-xs`}
    }
  }
`;
export default Home;
