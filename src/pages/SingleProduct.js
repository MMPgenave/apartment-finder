import React, { useEffect } from "react";
import { useParams, useHistory, useNavigate } from "react-router-dom";
import { useUiContext } from "../context/UiContext";
import SpeceficPageHero from "../components/SpeceficPageHero";
import { single_product_url as url } from "../utils/constants";
import Loading from "../components/Loading";
import ErrorOnLoadingSingleProduct from "../components/ErrorOnLoadingSingleProduct";
import styled from "styled-components";
import tw from "twin.macro";
import { CiLocationOn } from "react-icons/ci";
import { HAVE_NOT_ERROR_ON_SINGLE_PRODUCT_LOADING } from "../actions";
function SingleProduct() {
  const { state, getSingleProduct, dispatch } = useUiContext();
  const { id } = useParams();
  // const history = useHistory();
  const navigate = useNavigate();
  const { singleProduct, singleProductLoading, isErrorOnSingleProductLoading } =
    state;
  const { imgUrl, type, description, price, location } = singleProduct;
  useEffect(() => {
    getSingleProduct(` ${url}${id}`);
  }, [id]);
  //redirect to home page when there is an error on product loading
  useEffect(() => {
    console.log(
      `isErrorOnSingleProductLoading:${isErrorOnSingleProductLoading}`
    );
    if (isErrorOnSingleProductLoading) {
      const timeout = setTimeout(() => {
        // history.push("/");
        navigate("/products");
      }, 5000);
    }
  }, [isErrorOnSingleProductLoading]);
  if (singleProductLoading) {
    return <Loading />;
  } 
  if (isErrorOnSingleProductLoading) {
    return <ErrorOnLoadingSingleProduct></ErrorOnLoadingSingleProduct>;
  }
  return (
    <div>
      <SpeceficPageHero to={type} />
      <Wrapper>
        <div className="card">
          <img src={imgUrl} alt={type} />

          <div>
            <h1>{type}</h1>
            <div className="locationandprice">
              <div className="location">
                <p><CiLocationOn /></p>
                <h3>{location}</h3>
              </div>
              <p>قیمت :{price} ملیارد تومان</p>
            </div>

            <p className="description">{description}</p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
const Wrapper = styled.div.attrs({})`
  & {
    .card {
      ${tw`w-[95%] mx-auto mt-6 mb-10 md:flex md:flex-row-reverse`}
    }
    img {
      ${tw`rounded-b-lg mb-6 md:w-[35rem] md:h-96 object-cover md:rounded-xl`}
    }
    h1 {
      ${tw`text-2xl text-gray-100 mb-6 md:text-[3rem]`}
    }
    .locationandprice {
      ${tw`w-[95%] mb-4 justify-between flex text-gray-500 md:mt-24 md:w-[58%]`}
    }
    .location {
      ${tw`flex text-gray-500 text-xl`}
    }
    .location > h3 {
      ${tw`mr-2`}
    }
    .location > p {
      ${tw`text-yellowmmp `}
    }
    .description {
      ${tw`text-gray-400 indent-4 text-justify p-4 md:w-[60%]`}
    }
  }
`;
export default SingleProduct;
