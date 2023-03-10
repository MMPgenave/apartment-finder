import React, { useContext } from "react";
import { useSidebarContext } from "../context/SidebarContext";
import styled from "styled-components";
import tw from "twin.macro";
import logo from "../assets/logo.bmp";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { FaTimes } from "react-icons/fa";
import { TOGGLE_SIDEBAR } from "../actions";
function Sidebar() {
  const { state, dispatch } = useSidebarContext();
  return (
    <SidebarContainer>
      <aside
        className={`${
          state.isSidebarOpen ? "sidebar show-sidebar" : "sidebar"
        }`}
      >
        <div className="header">
          <img src={logo} alt="logo" />
          <button
            type="button"
            onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
          >
            <FaTimes />
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
      </aside>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div.attrs({})`
  & {
    .sidebar {
      ${tw`  fixed top-0 left-0 right-0 lg:hidden  bg-gray-800  `}
    }
    .show-sidebar {
      ${tw` hidden `}
    }
    .header {
      ${tw`flex justify-between bg-gray-800  items-center`}
    }
    img {
      ${tw`w-24 h-24  p-4 border-0 rounded-3xl  mr-10 `}
    }
    .Nav-items {
      ${tw`  flex flex-col justify-between  bg-gray-800    `}
    }
    .link {
      ${tw`no-underline mr-4 text-slate-500 hover:text-stone-300`}
    }
    button {
      ${tw`text-xl hover:text-red-600`}
    }
  }
`;
export default Sidebar;
