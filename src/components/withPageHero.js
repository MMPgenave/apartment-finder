import React from "react";
import PageHero from "./PageHero";
function UpdatedPageHero(OriginalPageHero) {
  function NewComponent({ to }) {
    return (
      <div>
        <OriginalPageHero to={to} />
        <div className=" border border-x-green-700 "></div>
      </div>
    );
  }
  return NewComponent;
}

export default UpdatedPageHero(PageHero);
