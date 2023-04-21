import React from "react";
import PageHero from "./PageHero";
function UpdatedPageHero(OriginalPageHero) {
  function NewComponent({ to }) {
    return (
      <div className="h-18">
        <OriginalPageHero to={to} />
        <div className="w-48 mx-auto h-2 bg-orangemmp border">ff f</div>
      </div>
    );
  }
  return NewComponent;
}

export default UpdatedPageHero(PageHero);
