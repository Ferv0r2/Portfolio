import React, { Dispatch, SetStateAction } from "react";
import Slider from "react-slick";
import { v1 } from "uuid";

interface Props {
  setPick: Dispatch<SetStateAction<number>>;
}

export const MiningSlider = ({ setPick }: Props) => {
  const CustomPrevArrow = ({ onClick, currentSlide }: any) => {
    setPick(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-left-16 bottom-0 left-8 w-8 h-8 cursor-pointer z-0"
        onClick={() => {
          onClick();
        }}
      >
        <img src="media/icons/mining_prev.png" />
      </div>
    );
  };

  const CustomNextArrow = ({ onClick, currentSlide }: any) => {
    setPick(currentSlide);
    return (
      <div
        className="absolute sm:top-48 sm:-right-16 bottom-0 right-8 w-8 h-8 cursor-pointer z-0"
        onClick={() => {
          onClick();
        }}
      >
        <img src="media/icons/mining_next.png" />
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

  const rank = ["하", "중", "상"];

  return (
    <div className="w-full md:w-6/12 sm:w-8/12 mx-auto text-2xl sm:text-3xl text-box_text text-center font-GmarketSansBold">
      <Slider {...settings}>
        {rank.map((v, i) => (
          <div key={v1()}>
            <div className="relative w-108 h-108 mx-auto">
              <img src={`media/items/${i + 1}PK.png`} alt={v} />
            </div>
            <p className="text-shadow">{v}급 곡괭이</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};
