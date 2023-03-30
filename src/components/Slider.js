import React from "react";
// import "./SliderCss.css";
import { useEffect } from "react";
// import { PlayersData } from "./data";
import styled from "styled-components";
import tw from "twin.macro";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useUiContext } from "../context/UiContext";
import { SLIDE } from "../actions";
const Slider = () => {
  
  const { state, dispatch } = useUiContext();
  //   const [player, setPlayer] = useState(PlayersData[0]);
  const Item = state.Image_Stock;
  const Timer = setTimeout(() => {
    // console.log("SLIDER");

    // setPlayer((prev) => {
    //   if (player.id === 2) {
    //     return PlayersData[0];
    //   } else {
    //     return PlayersData[player.id + 1];
    //   }
    // });

    dispatch({ type: SLIDE });
  }, 2000);
  useEffect(() => {
    return () => clearTimeout(Timer);
  });

  return (
    <SliderContent>
      <img src={Item.imgUrl} alt={Item.type} />
    </SliderContent>
  );
};
const SliderContent = styled.section.attrs({})`
  & {
    img {
      // h-1/2 sm:w-[50%] sm:h-fit  lg:max-w-[50%] lg:h-fit w-full h-full
      ${tw` block brightness-75 object-contain  rounded-lg  `}
    }
  }
`;
export default Slider;
