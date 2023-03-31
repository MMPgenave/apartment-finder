import React from "react";
import { useUiContext } from "../context/UiContext";
import PageHero from "../components/PageHero";
import styled from "styled-components";
import tw from "twin.macro";
import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

function Products() {
  const { state, dispatch } = useUiContext();
  return (
    <div>
      <PageHero to="محصولات" />
      <Wrapper>
        <div className="products">
          {state.products.map((item) => {
            const { id, imgUrl, type, description, price, location } = item;
            return (
              <Link to={`/product/${id}`} key={id} className="item">
                <img src={imgUrl} alt={type} />
                <div className="justfor-background">
                  <h1>{type}</h1>
                  <div className="locationandprice">
                    <div className="location">
                      <CiLocationOn />
                      <h3>{location}</h3>
                    </div>
                    <p>قیمت :{price} ملیارد تومان</p>
                  </div>

                  <p className="description">{description}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    .products {
      ${tw`my-12 md:flex md:flex-wrap`}
    }
    .item {
      ${tw`md:w-[26rem]  mt-6 rounded-lg flex flex-col   w-[90%] mx-auto bg-gray-800 `}
    }
    .justfor-background {
      ${tw`bg-gray-800 p-4 flex flex-col md:h-[22rem]  `}
    }
    img {
      ${tw`mb-6 h-80 rounded-t-xl `}
    }
    h1 {
      ${tw`text-2xl text-slate-100 mb-6 bg-gray-800 `}
    }
    .locationandprice {
      ${tw`w-[95%] mb-4 justify-between flex text-slate-500 bg-gray-800 `}
    }
    .location {
      ${tw`flex text-slate-500 bg-gray-800 `}
    }
    .location > h3 {
      ${tw`mr-2  `}
    }
    .description {
      ${tw`text-slate-300 indent-4 text-justify   p-4 bg-gray-800  `}
    }
  }
`;
export default Products;
