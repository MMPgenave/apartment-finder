import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
function ErrorOnLoadingTotalProducts() {
  return (
    <Wrapper>
      <div>
        <h1>در دانلود کردن محصولات خطایی رخ داده است.</h1>
        <h3>لطفا صفحه را ریلود کنید.</h3>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    div {
      ${tw`min-h-[calc(100vh - 0rem)] flex flex-col justify-center items-center md:text-3xl text-lg text-gray-300 bg-gray-800`}
    }
    h3 {
      ${tw`text-gray-500 text-sm mt-4 bg-gray-800`}
    }
  }
`;
export default ErrorOnLoadingTotalProducts;
