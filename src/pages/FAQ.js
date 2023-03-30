import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageHero from "../components/PageHero";
function FAQ() {
  return (
    <Wrapper>
      {/* <PageHero to=" سوالات متداول " /> */}

      <section> FAQ</section>
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
export default FAQ;
