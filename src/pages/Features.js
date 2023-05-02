import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageHero from "../components/PageHero";
import TestUseMemo from "../testReactFeature/testUseMemo";
import Testusecallback from "../testReactFeature/testuseCallback";
import TestUpdateStateDirectly from "../testReactFeature/testUpdateStateDirectly";
function Features() {
  return (
    <Wrapper>
      <TestUpdateStateDirectly />
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
