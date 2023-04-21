import React, { useContext } from "react";
import { useSidebarContext } from "../context/SidebarContext";
import styled from "styled-components";
import tw from "twin.macro";
import { arme_url } from "../utils/constants";
import { Link } from "react-router-dom";
import { links } from "../utils/constants";
import { FaTimes,FaBars } from "react-icons/fa";
import { AiOutlineLogin } from "react-icons/ai";
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
          <img src={arme_url} alt="logo" />
          <button
            type="button"
            onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
          >
            <FaBars />
          </button>
        </div>

        <div className="Nav-items">
          {links.map((link) => {
            const { url, id, text, icon } = link;
            return (
              <Link
                to={url}
                key={id}
                className="link"
                onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
              >
                <h3>{icon}</h3>
                <p>{text}</p>
              </Link>
            );
          })}
        </div>
        <Link
          to="/login"
          className="login"
          onClick={() => dispatch({ type: TOGGLE_SIDEBAR })}
        >
          <h3>
            <AiOutlineLogin />
          </h3>
          <p>ورود </p>
        </Link>
        {/* <section className="just-full-hight"></section> */}
      </aside>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div.attrs({})`
  & {
    .sidebar {
      //-z-[1]
      ${tw` fixed top-0 right-0 w-[60%] min-h-[calc(100vh-0rem)] transform translate-x-full transition-all lg:hidden  bg-gray-800  `}
    }
    .show-sidebar {
      //hidden z-[999]
      ${tw` transform translate-x-0  z-10`}
    }
    .header {
      ${tw`flex justify-between bg-gray-800  items-center`}
    }
    img {
      ${tw`w-20 h-20  p-4 border-0 rounded-3xl  mr-5 `}
    }
    .Nav-items {
      ${tw`h-24  flex flex-col justify-between  bg-gray-800 mr-2 mt-4    `}
    }
    .link {
      ${tw`flex no-underline mr-4 mt-6 text-xl text-gray-500 hover:text-gray-300`}
    }
    .link > h3 {
      ${tw`ml-3`}
    }
    button {
      ${tw`text-2xl text-yellowmmp hover:text-3xl ml-6`}
    }
    .login {
      ${tw`text-gray-500 hover:text-gray-300 mr-6 flex items-center mt-48 text-xl`}
    }
    .login > h3 {
      ${tw`ml-3`}
    }
    /* .just-full-hight{
      ${tw`h-96 `}
    } */
  }
`;
export default Sidebar;
