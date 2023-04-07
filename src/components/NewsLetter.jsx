import React, { useRef } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { NEWLETTER_SUBMISSION } from "../actions";
import { useUiContext } from "../context/UiContext";
function NewsLetter() {
  // const { state, dispatch } = useUiContext();
  // const refInput = useRef(null);
  return (
    <Wrapper>
      <section>
        <div>
          <h2> به خبر نامه ما بپیوندید و 20% تخفیف بگیرید </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
          </p>
        </div>
        <form action="https://formspree.io/f/xnqyzyje" method="POST">
          <input
            type="email"
            required
            placeholder=" ایمیلتو وارد کن"
            name="Email"
          />
          <button
            type="submit"
            // onClick={(e) =>
            //   dispatch({
            //     type: NEWLETTER_SUBMISSION,
            //     payload: e,
            //     input_value: refInput.current.input_value,
            //   })
            // }
          >
            عضو شوید
          </button>
        </form>
      </section>
    </Wrapper>
  );
}
const Wrapper = styled.div.attrs()`
  & {
    section {
      //
      ${tw` flex md:justify-between w-[98%] mx-auto flex-wrap  items-center rounded-b-lg py-2 mb-6 bg-gray-200`}
    }
    section > div {
      ${tw`bg-gray-200 md:w-[50%] mr-4`}
    }
    h2 {
      ${tw`text-gray-800  md:w-4/5  text-2xl px-2 mb-2 `}
    }
    p {
      ${tw`text-justify px-2 text-sm mb-2 text-gray-700`}
    }
    form {
      ${tw` mx-auto md:ml-4 mt-6`}
    }
    input {
      ${tw`rounded-r-xl border-0 bg-gray-300 text-gray-800`}
    }
    input:focus {
      //outline-none
      ${tw` border-none outline-0 border-gray-700`}
    }
    button {
      ${tw`rounded-l-xl bg-orangemmp px-4 py-2 text-gray-200 hover:bg-gray-100 hover:text-yellow-500`}
    }
  }
`;
export default NewsLetter;
