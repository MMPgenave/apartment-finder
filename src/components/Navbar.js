import React from "react";
import { arme_url } from "../utils/constants";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import tw from "twin.macro";
import { TOGGLE_SIDEBAR } from "../actions";
import { useSidebarContext } from "../context/SidebarContext";

function Navbar() {
  const { state, dispatch } = useSidebarContext();
  return (
    <StyledNavbar
      onClick={() => {
        if (state.isSidebarOpen) {
          dispatch({ type: TOGGLE_SIDEBAR });
        }
      }}
      className={state.isSidebarOpen && "opacity-50"}
    >
      <div className="main">
        <div className="nav-header">
          <Link to="/">
            <img src={arme_url} alt="logo" />
          </Link>
          <button
            className="fabars-button "
            onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
          >
            <FaBars className={state.isSidebarOpen && "hidden"} />
          </button>
        </div>

        <div className="Nav-items">
          {links.map((link) => {
            const { url, id, text } = link;
            return (
              <Link to={url} key={id} className="link">
                {text}
              </Link>
            );
          })}
        </div>

        <Link to="/login" className="login">
          ورود
        </Link>
        <Link to="/signup" className="login">
          ثبت نام
        </Link>
      </div>
    </StyledNavbar>
  );
}
export default Navbar;

const StyledNavbar = styled.main.attrs({
  // main: "h-20 flex items-center justify-between ",
})`
  & {
    .main {
      ${tw`h-20 w-[78%] flex  items-center justify-between  text-sm mx-auto `}
    }
    img {
      //ml-20 mr-12
      ${tw`w-20 h-20  p-4 border-0 rounded-3xl md:ml-20 md:mr-6 `}
    }

    .Nav-items {
      ${tw` w-auto justify-between items-center  text-gray-500 hidden  lg:flex ml-auto `}
    }
    .link {
      //gray500   rgb(107 114 128)    gray400  156 163 175  gray300 209 213 219  gray100 243 244 246
      ${tw`no-underline mr-4 text-gray-500 hover:text-gray-300`}
    }
    .login {
      ${tw`text-gray-400 tracking-widest text-sm  ml-12 hidden hover:text-gray-100 lg:block`}
    }
    .fabars-button {
      ${tw`text-yellowmmp bg-transparent text-xl block  lg:hidden ml-4 hover:text-2xl`}
    }
    .nav-header {
      ${tw`flex justify-between w-full  lg:w-auto items-center `}
    }
  }
`;
