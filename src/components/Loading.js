import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
function Loading() {
  return (
    <Wrapper>
      <section> در حال بارگذاری ... </section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    section {
       ${tw`w-full h-screen text-3xl flex justify-center items-center bg-gray-900 text-gray-500`}
    }
  }
`;
export default Loading;
