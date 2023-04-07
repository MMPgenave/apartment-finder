import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
function ErrorOnLoadingSingleProduct() {
  return (
    <Wrapper>
      <div>
        <h1>در دانلود کردن محصول خطایی رخ داده است.</h1>
        <h3>بعد از 5 ثانیه به صفحه محصولات هدایت خواهید شد.</h3>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    div {
      ${tw`min-h-[calc(100vh - 10rem)] flex flex-col justify-center items-center text-sm  md:text-3xl text-gray-300`}
    }
    h3 {
      ${tw`text-gray-500 text-lg mt-4`}
    }
  }
`;
export default ErrorOnLoadingSingleProduct;
