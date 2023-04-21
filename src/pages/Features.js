import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageHero from "../components/PageHero";
import TestUseMemo from "../testReactFeature/testUseMemo";
function Features() {
  return (
    <Wrapper>
      {/* <PageHero to="ویژگی ها" /> */}
      <TestUseMemo />
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      ${tw`min-h-[calc(100vh - 10rem)] flex justify-center items-center text-3xl`}
    }
  }
`;
export default Features;
