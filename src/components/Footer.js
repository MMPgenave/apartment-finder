import React from "react";
import { MMP_Info } from "../utils/constants";
import styled from "styled-components";
import tw from "twin.macro";
function Footer() {
  return (
    <FooterContainer>
      <main className="main">
        <h3>با ما در ارتباط باشید.</h3>
        <div className="socials">
          {MMP_Info.map((item) => {
            const { id, socialMedia } = item;
            const { url, icon } = socialMedia;
            return (
              <a href={url} rel="noreferrer" target="_blank" key={id}>
                {icon}
              </a>
            );
          })}
        </div>
      </main>
    </FooterContainer>
  );
}

const FooterContainer = styled.div.attrs({})`
  & {
    main {
      ${tw`flex flex-col w-full text-lg justify-center bg-gray-800 text-gray-500 items-center p-1 h-20`}
    }
    
    .socials {
      ${tw`flex justify-center items-center text-xl bg-gray-800 my-1 text-gray-500`}
    }
    a {
      ${tw`ml-4 hover:text-gray-300`}
    }
  }
`;
export default Footer;
