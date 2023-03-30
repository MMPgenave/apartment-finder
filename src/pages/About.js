import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Rooms_List } from "../utils/constants";
import PageHero from "../components/PageHero";
function About() {
  return (
    <AboutContainer>
      <PageHero to="درباره ما" />
      <div className="main">
        <div className="right-side">
          <h1>داستان ما</h1>

          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
        </div>
        <img src={Rooms_List[4].imgUrl} alt="nice" />
      </div>
    </AboutContainer>
  );
}
const AboutContainer = styled.main.attrs({})`
  & {
    .main {
      //sm:h-64 xl:h-80 2xl:h-screen
      ${tw`min-h-[calc(100vh - 15rem)] justify-center items-center w-[90%] mx-auto lg:flex-row lg:items-start flex flex-col-reverse text-gray-300 `}
    }
    img {
      ${tw` hover:transition-shadow lg:w-96 lg:h-96 max-w-full h-auto mt-6 mb-4 rounded-sm object-cover lg:rounded-lg`}
    }
    .right-side {
      ${tw`text-justify ml-10 mt-5`}
      h1 {
        ${tw`text-3xl`}
      }
    }
    .right-side>p{
      ${tw`mt-3 mb-6`}
    }
  }
`;
export default About;
