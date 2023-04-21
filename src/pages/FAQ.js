import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import EnhancedPageHero from "../components/withPageHero";
// const EnhancedPageHero = Wrapper(WrappedPageHero);
function FAQ() {
  return (
    <>
      <EnhancedPageHero to="سوالات متداول" />
      <section className="h-96 flex justify-center items-center text-3xl">
        FAQ
      </section>
    </>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      ${tw` flex justify-center items-center text-3xl`}
    }
    div {
      ${tw` h-96`}
    }
  }
`;
export default FAQ;
