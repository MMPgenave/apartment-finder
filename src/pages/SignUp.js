import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { AiOutlineLogin } from "react-icons/ai";
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://lgvofwrivqhypuukpjtw.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxndm9md3JpdnFoeXB1dWtwanR3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMwNTc1MzUsImV4cCI6MTk5ODYzMzUzNX0.AEkszkR93h066aXq-3gxjVNAQbMSd-JMyPMcOtCMfzA"
);

function SignUp() {
  const register = (email, password) =>
    supabase.auth.signUp({ email, password });

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const inputsHandler = (e) => {
    const { id, value } = e.target;
    switch (id) {
      case "name":
        setData((prev) => {
          return { ...prev, name: value };
        });
      case "email":
        setData((prev) => {
          return { ...prev, email: value };
        });
      case "password":
        setData((prev) => {
          return { ...prev, password: value };
        });
      case "passwordConfirm":
        setData((prev) => {
          return { ...prev, confirmPassword: value };
        });
      default:
    }
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (data.password !== data.confirmPassword) {
      alert(`email:${data.email}
      password:${data.password}
        confirmPassword:${data.confirmPassword}`);
      alert("The password does not match!");
    } else {
      const { dataa, error } = await register(data.email, data.password);
      if (!error && dataa) {
        alert(
          "Registration Successful. Check your email to confirm your account"
        );
      }
    }
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
            <input
              required
              value={data.nama}
              onChange={(e) => inputsHandler(e)}
              type="text"
              id="name"
              placeholder=" اسم"
            />

            <input
              required
              type="email"
              id="email"
              placeholder="ایمیل "
              onChange={(e) => inputsHandler(e)}
            />
            <input
              required
              type="password"
              id="password"
              placeholder="رمز "
              onChange={(e) => inputsHandler(e)}
            />
            <input
              required
              type="password"
              id="passwordConfirm"
              placeholder="تکرار رمز"
              onChange={(e) => inputsHandler(e)}
            />

            <button type="submit">ثبت نام</button>
          </form>
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
  }
`;
export default SignUp;
