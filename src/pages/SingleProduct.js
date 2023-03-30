import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useUiContext } from "../context/UiContext";
import PageHero from "../components/PageHero";
import { single_product_url as url } from "../utils/constants";
function SingleProduct() {
  const { state, getSingleProduct } = useUiContext();
  const { id } = useParams();
  
  useEffect(() => {
    getSingleProduct(` ${url}${id}`);
  }, []);
  return (
    <div>
      <PageHero to="sigle-product" />
      <h1>dartar</h1>
      <h1>{state.singleProduct.type}</h1>
    </div>
  );
}

export default SingleProduct;
