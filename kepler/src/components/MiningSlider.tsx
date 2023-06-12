import React from "react";
import Slider from "react-slick";

import { useSetRecoilState } from "recoil";
import { pickIdState } from "@/stores";

export const MiningSlider = () => {
  const setPickId = useSetRecoilState(pickIdState);

  const CustomPrevArrow = ({
    onClick,
    currentSlide,
  }: {
    onClick: () => void;
    currentSlide: number;
  }) => {
    setPickId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-left-16 bottom-0 left-8 w-8 h-8 cursor-pointer z-0"
        onClick={() => {
          onClick();
        }}
      >
        <img src="images/mining/prev.png" />
      </div>
    );
  };

  const CustomNextArrow = ({
    onClick,
    currentSlide,
  }: {
    onClick: () => void;
    currentSlide: number;
  }) => {
    setPickId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-right-16 bottom-0 right-8 w-8 h-8 cursor-pointer z-0"
        onClick={() => {
          onClick();
        }}
      >
        <img src="images/mining/next.png" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow onClick={() => {}} currentSlide={0} />,
    prevArrow: <CustomPrevArrow onClick={() => {}} currentSlide={0} />,
  };
  return (
    <div className="w-full md:w-6/12 sm:w-8/12 m-auto text-2xl sm:text-3xl text-box_text text-center font-GmarketSansBold">
      <Slider {...settings}>
        <div>
          <div className="relative w-108 h-108 m-auto">
            <img src="images/items/1PK.png" alt="Normal" />
          </div>
          <p className="text-shadow">하급 곡괭이</p>
        </div>
        <div>
          <div className="relative w-108 h-108 m-auto">
            <img src="images/items/2PK.png" alt="Rare" />
          </div>
          <p className="text-shadow">중급 곡괭이</p>
        </div>
        <div>
          <div>
            <div className="relative w-108 h-108 m-auto">
              <img src="images/items/3PK.png" alt="Unique" />
            </div>
            <p className="text-shadow">상급 곡괭이</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
