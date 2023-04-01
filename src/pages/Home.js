import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleDown, FaAngleLeft, FaAngleRight } from "react-icons/fa";
// import { Rooms_List } from "../utils/constants";
import { useUiContext } from "../context/UiContext";
import { Left_Room, Right_Room } from "../actions";
import Slider from "../components/Slider";
import { Link } from "react-router-dom";
import NewsLetter from "../components/NewsLetter";
function Home() {
  const { state, dispatch } = useUiContext();

  return (
    <HomeContainer>
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
              <input type="checkbox"></input>
              <input type="checkbox"></input>
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
      ${tw`w-[97%] md:h-[23rem] h-[30rem]  mx-auto relative  `}
    }
    .main-content {
      //w-full sm:p-4
      ${tw`flex flex-col-reverse justify-between items-center md:flex-row rounded-xl  bg-gray-800 `}
    }
    .title {
      //w-1/2 h-1/2 flex flex-col
      ${tw`md:pr-10 md:mt-1 mt-6 mb-2 mr-6  md:pt-10  md:w-2/4 md:justify-between  bg-gray-800  `}
    }
    .slider {
      //h-1/2 max-h-60 max-w-[75%]  h-1/2  sm:w-[50%] sm:h-fit lg:max-w-full lg:h-fit
      ${tw` h-full md:w-3/4 w-full overflow-hidden`}
    }
    h1 {
      ${tw`md:text-[3rem] text-gray-400 mb-6 text-3xl md:leading-relaxed md:w-[90%] `}
    }
    .btnss {
      ${tw` flex justify-start mt-16 md:mr-20 md:ml-16 md:mb-20 md:h-10 w-[90%] md:w-96 h-8 bg-gray-800 `}
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
      ${tw`flex flex-row justify-between w-[89%] h-[6rem] mx-auto  rounded-lg absolute top-[94%] left-[6%]  bg-gray-700 bg-opacity-70`}
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
      ${tw`block flex-none hover:text-yellowmmp [text-decoration: none] [text-align: right] lg:text-sm`}
    }
    .reserve-btn {
      ${tw`bg-orangemmp opacity-70 text-gray-50 hover:bg-gray-100 hover:text-yellowmmp  p-2 rounded-l-lg lg:px-8 lg:text-lg w-auto`}
    }
    .bottom-section {
      ${tw`w-[95%] h-[28rem] mx-auto mt-24 pt-4  mb-12 bg-transparent `}
    }
    .top-sec {
      ${tw`flex justify-between mt-3 mb-2`}
    }
    .top-sec > h2 {
      ${tw` text-gray-400 text-3xl lg:mr-2 tracking-wider `}
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
      ${tw`flex justify-between flex-row flex-wrap  mt-2 mr-2`}
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
