import React, { Dispatch, SetStateAction } from "react";
import Slider from "react-slick";

import { useSetRecoilState } from "recoil";
import { boxIdState } from "@/stores";
import { v1 } from "uuid";

interface Props {
  setBoxId: Dispatch<SetStateAction<number>>;
}

export const BoxSlider = ({ setBoxId }: Props) => {
  const CustomPrevArrow = ({ onClick, currentSlide }: any) => {
    setBoxId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-left-16 bottom-0 left-8 w-8 h-8 cursor-pointer z-10"
        onClick={() => {
          onClick();
        }}
      >
        <img src="media/icons/box_prev.png" />
      </div>
    );
  };

  const CustomNextArrow = ({ onClick, currentSlide }: any) => {
    setBoxId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-right-16 bottom-0 right-8 w-8 h-8 cursor-pointer z-10"
        onClick={() => {
          onClick();
        }}
      >
        <img src="media/icons/box_next.png" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };

  const rank = ["Normal", "Rare", "Unique"];

  return (
    <div className="w-full md:w-6/12 sm:w-8/12 mx-auto text-2xl sm:text-3xl text-box_text text-center font-GmarketSansBold italic">
      <Slider {...settings}>
        {rank.map((v) => (
          <div key={v1()}>
            <div className="relative w-120 h-96 mx-auto">
              <img src={`media/box/box_${v.toLowerCase()}.png`} alt={v} />
            </div>
            <p className="-mt-20 sm:mt-0 text-shadow">{v} Box</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
