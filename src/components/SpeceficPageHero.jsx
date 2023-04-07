import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
function SpeceficPageHero({ to }) {
  return (
    <Wrapper>
      <section>
        <Link to="/" className="homepage">
          صفحه اصلی
        </Link>
        /
        <Link to="/products" className="homepage">
          محصولات
        </Link>
        /<p>{to}</p>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      ${tw`h-[5rem] justify-start text-xs md:text-xl flex items-center mt-4 md:pr-16 pr-4 bg-gray-700 p-4`}
    }
    .homepage {
      ${tw`text-gray-400 hover:text-gray-300 mr-4 ml-2`}
    }
    p {
      ${tw` mr-4`}
    }
  }
`;
export default SpeceficPageHero;
