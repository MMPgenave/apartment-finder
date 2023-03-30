import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
function PageHero({ to }) {
  return (
    <Wrapper>
      <section>
        <Link to="/" className="homepage">
        
          خانه
        </Link>
        / {to}
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      ${tw`h-[5rem] justify-start text-3xl flex items-center mt-4  bg-gray-700 p-4`}
    }
    .homepage {
      ${tw`text-slate-400 mr-16 `}
    }
  }
`;
export default PageHero;
