import React from "react";
import { MMP_Info } from "../utils/constants";
import styled from "styled-components";
import tw from "twin.macro";
function Footer() {
  return (
    <FooterContainer>
      <main className="main">
        <h3>ما را در شبکه های اجتماعی دنبال کنید</h3>

        <div className="socials">
          {MMP_Info.map((item) => {
            const { id, socialMedia } = item;
            const { url, icon } = socialMedia;
            return (
              <a href={url} target="_blank" key={id}>
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
      ${tw`flex flex-col w-full bg-gray-800 text-gray-500 items-center p-2`}
    }
    .socials {
      ${tw`flex justify-center items-center bg-gray-800 my-2 text-gray-500`}
    }
    a {
      ${tw`ml-4 hover:text-gray-300`}
    }
  }
`;
export default Footer;
