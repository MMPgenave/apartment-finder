import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import EnhancedPageHero from "../components/withPageHero";
// const EnhancedPageHero = Wrapper(WrappedPageHero);
function FAQ() {
  return (
    <Wrapper>
      <EnhancedPageHero to="faq" />
      <section> FAQ</section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      ${tw` flex justify-center items-center text-3xl`}
    }
  }
`;
export default FAQ;
