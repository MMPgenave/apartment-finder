import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import {FaAngleDown} from "react-icons/fa"
function Home() {
  return (
    <HomeContainer>
      <div
        className="container"
        // style={{
        //   backgroundImage:
        //     "url('https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg')",
        // }}
      >
        <div className="main-content">
          <div className="title">
            <h1>آپارتمان لاکچری خودت رو انتخاب کن</h1>
            <div className="btnss">
              <button type="button">شروع کن</button>
              <button type="button">مطالعه کن </button>
            </div>
          </div>
          <img
            src="https://cdn.pixabay.com/photo/2016/11/18/17/20/living-room-1835923_960_720.jpg"
            alt="image"
          />
        </div>

        <div className="label">
          
          <main>
            <main className="dropdown">
              <button className="dropbtn">
                موقعیت 
                <FaAngleDown/>
              </button>
              <main className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </main>
            </main>
          </main>
          <button>dar </button>
        </div>
      </div>
      <div className="bottom-section"></div>
    </HomeContainer>
  );
}
const HomeContainer = styled.main.attrs({})`
  & {
    .container {
      //flex justify-center items-baseline
      ${tw`w-full h-[22rem] mx-auto static    `}
    }
    .main-content {
      ${tw`flex flex-col-reverse justify-between items-center sm:flex-row rounded-xl p-4 bg-gray-800 `}
    }
    .title {
      ${tw`sm:mr-10 sm:mt-1 mt-2 w-1/2 h-1/2 flex flex-col sm:justify-between bg-gray-800  `}
    }
    img {
      ${tw`w-[75%] h-1/2 sm:w-[50%] border-0 rounded-lg sm:h-fit  `}
    }
    h1 {
      ${tw`sm:text-[3rem] text-2xl sm:leading-relaxed lg:w-[90%] `}
    }
    .btnss {
      ${tw`flex justify-between  sm:h-10 w-48 h-8 bg-gray-800 `}
    }
    .btnss > button {
      ${tw` px-5 py-1 text-sm border rounded-3xl`}
    }
    .btnss > button:first-of-type {
      ${tw`bg-gray-50 text-gray-800`}
    }
    .btnss > button:last-of-type {
      ${tw`bg-yellow-500`}
    }
    .label {
      ${tw`flex justify-between items-center w-[67%] h-[6rem] mx-auto  rounded-lg absolute top-[60%] left-[16%] sm:left-[17%] bg-gray-800 bg-opacity-70`}
    }
    .bottom-section {
      ${tw`w-[85%] h-[6rem] mx-auto mt-12  border rounded-lg mb-2 bg-transparent `}
    }
    .dropbtn{
      ${tw`flex w-16 items-center justify-between`}
    }
  }
`;
export default Home;
