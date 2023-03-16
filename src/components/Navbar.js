import React from "react";
import logo from "../assets/logo.bmp";
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
    <StyledNavbar>
      <div className="main">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
          <button
            className="fabars-button"
            onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
          >
            <FaBars />
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

        <button type="button">ثبت نام</button>
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
      ${tw`h-20 flex items-center justify-between  text-sm  `}
    }
    img {
      ${tw`w-24 h-24  p-4 border-0 rounded-3xl ml-20 mr-12 `}
    }

    .Nav-items {
      ${tw` w-auto justify-between items-center  text-gray-500 hidden  lg:flex ml-auto `}
    }
    .link {
      ${tw`no-underline mr-4 text-slate-500 hover:text-stone-300`}
    }
    button {
      ${tw`text-gray-400 py-2 px-6 border-0 rounded-3xl text-sm  bg-gray-800 ml-12 hidden hover:text-yellow-500 lg:block`}
    }
    .fabars-button {
      ${tw`text-yellow-500 bg-transparent text-xl block  lg:hidden ml-4 hover:text-2xl`}
    }
    .nav-header {
      ${tw`flex justify-between w-full  lg:w-auto items-center `}
    }
  }
`;
