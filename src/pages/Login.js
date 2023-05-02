import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineLogin, AiOutlineTwitter } from "react-icons/ai";
import { GrGoogle, GrFacebookOption } from "react-icons/gr";

function Login() {
  const nn = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
  };
  const signUpHandler = () => {
    nn("/");
  };
  return (
    <Wrapper>
      <div className="main">
        <div className="container">
          <header>
            <h1>
              <AiOutlineLogin />
            </h1>
          </header>
          <form onSubmit={submitHandler}>
            <input required type="email" placeholder="ایمیلتو بنویس" />
            <input required type="password" placeholder="رمزتو بنویس" />
            <button type="submit">ورود</button>
          </form>
          <div>
            <button onClick={signUpHandler} className="signUp">
              هنوز ثبت نام نکردی؟
            </button>
          </div>
          <section>
            <p>و یا با روش های زیر وارد شو</p>
            <div>
              <h3>
                <GrFacebookOption />
              </h3>
              <h3>
                <GrGoogle />
              </h3>
              <h3>
                <AiOutlineTwitter />
              </h3>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    .main {
      ${tw`min-h-[calc(100vh - 10rem)]  flex justify-center items-center `}
    }
    .container {
      ${tw`border border-gray-500 rounded-lg w-[80%] md:w-1/3`}
    }
    header {
      ${tw`flex my-5 justify-center items-center`}
    }
    header > h1 {
      ${tw`text-[3rem]`}
    }
    form {
      ${tw`flex flex-col my-2 mx-4`}
    }
    form > input {
      ${tw`text-gray-50 text-xl mt-6 bg-transparent border-t-transparent border-l-transparent border-r-transparent border-b-2`}
    }
    input::placeholder {
      ${tw`tracking-widest text-gray-400`}
    }
    textarea:focus,
    input:focus {
      ${tw`border-gray-100 border-t-transparent border-l-transparent border-r-transparent outline-transparent ring-0`}
    }
    form > button {
      ${tw`mt-12 bg-yellowmmp rounded-lg py-2 text-2xl hover:bg-gray-300 hover:text-yellowmmp `}
    }
    form:focus {
      ${tw`outline-transparent ring-0`}
    }
    .signUp {
      ${tw`text-red-600`}
    }
    section {
      ${tw`w-full mt-16 mb-4  flex flex-col items-center`}
    }
    section > p {
      ${tw`text-gray-400 mb-2`}
    }
    section > div {
      ${tw`flex my-4 w-1/3 justify-between text-3xl text-gray-400 `}
    }
    section > div > h3 {
      ${tw`hover:text-gray-50`}
    }
  }
`;
export default Login;
