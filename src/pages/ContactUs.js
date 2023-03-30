import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import PageHero from "../components/PageHero";
function ContactUs() {
  return (
    <Wrapper>
      {/* <PageHero to="ارتباط با ما" /> */}

      <section>Contact Us</section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {//h-[calc(100vh - 15rem)]
      ${tw`min-h-[calc(100vh - 10rem)] flex justify-center items-center text-3xl`}
    }
  }
`;
export default ContactUs;
