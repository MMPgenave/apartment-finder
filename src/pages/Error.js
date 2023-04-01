import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";
function Error() {
  return (
    <ErrorConatainer>
      <section>
        <h1>404</h1>
        <p>صفحه مورد نظر پیدا نمی شود</p>
        {/* <button type="button"> */}
          <Link to="/" className="button">بازگشت به خانه</Link>
        {/* </button> */}
      </section>
    </ErrorConatainer>
  );
}
const ErrorConatainer = styled.div.attrs({})`
  & {
    section {
      ${tw`flex flex-col items-center justify-center min-h-[calc(100vh - 8rem)]`}
    }
    h1{
      
      ${tw`text-[4rem] text-yellow-500 `}
    }

    p{
      ${tw`text-2xl `}
    }
  .button{
  ${tw`bg-yellow-500 mt-4 rounded-lg py-1 px-2 hover:bg-gray-200 hover:text-yellow-500`}
}
  }
`;
export default Error;
