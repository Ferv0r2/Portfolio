import React from "react";
import Slider from "react-slick";

import { useSetRecoilState } from "recoil";
import { boxIdState } from "@/stores";

export const BoxSlider = () => {
  const setBoxId = useSetRecoilState(boxIdState);

  const CustomPrevArrow = ({
    onClick,
    currentSlide,
  }: {
    onClick: () => void;
    currentSlide: number;
  }) => {
    setBoxId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-left-16 bottom-0 left-8 w-8 h-8 cursor-pointer z-10"
        onClick={() => {
          onClick();
        }}
      >
        <img src="images/box/prev.png" />
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
    setBoxId(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-right-16 bottom-0 right-8 w-8 h-8 cursor-pointer z-10"
        onClick={() => {
          onClick();
        }}
      >
        <img src="images/box/next.png" />
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
    <div className="w-full md:w-6/12 sm:w-8/12 m-auto text-2xl sm:text-3xl text-box_text text-center font-GmarketSansBold italic">
      <Slider {...settings}>
        <div>
          <div className="relative w-120 h-96 m-auto">
            <img src="images/box/box_normal.png" alt="Normal" />
          </div>
          <p className="-mt-20 sm:mt-0 text-shadow">Normal Box</p>
        </div>
        <div>
          <div className="relative w-120 h-96 m-auto">
            <img src="images/box/box_rare.png" alt="Rare" />
          </div>
          <p className="-mt-20 sm:mt-0 text-shadow">Rare Box</p>
        </div>
        <div>
          <div>
            <div className="relative w-120 h-96 m-auto">
              <img src="images/box/box_unique.png" alt="Unique" />
            </div>
            <p className="-mt-20 sm:mt-0 text-shadow">Unique Box</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};
