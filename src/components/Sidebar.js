import React, { useContext } from "react";
import { Sidebar_Context } from "../context/SidebarContext";
import styled from "styled-components";
import tw from "twin.macro";
function Sidebar() {
  const data = useContext(Sidebar_Context);
  const { state } = {
    ...data,
  };
  return (
    <SidebarContainer>
      <div className={state.isSidebarOpen ? "show" : "hide"}>Sidebar</div>
    </SidebarContainer>
  );
}
const SidebarContainer = styled.div.attrs({})`
  & {
    .show {
      ${tw`text-orange-600`}
    }
    .hide {
      ${tw`hidden`}
    }
  }
`;
export default Sidebar;
