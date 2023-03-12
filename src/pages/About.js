import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
function About() {
  return (
    <AboutContainer>
      <div className="main">
       
      </div>
    </AboutContainer>
  );
}
const AboutContainer = styled.main.attrs({})`
  & {
    .main {
      ${tw`h-48 sm:h-64 xl:h-80 2xl:h-screen`}
    }
  }
`;
export default About;
