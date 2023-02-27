import { FC } from "react";
import Slider from "react-slick";
import { AutoImage } from "utils";

const Carousel: FC = () => {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    autoplay: true,
    autuplaySpeed: 1000,
  };

  return (
    <Slider {...settings}>
      <div className="bg-black">
        <div className="relative max-w-[1200px] mx-auto h-96 after:edge-blur-1">
          <AutoImage
            src="/dummy/discord.jpg"
            className="object-cover"
            alt="discord_bot"
          />
        </div>
      </div>
      <div className="bg-black">
        <div className="relative max-w-[1200px] mx-auto h-96 after:edge-blur-1">
          <AutoImage
            src="/dummy/imco.jpg"
            className="object-cover"
            alt="imco"
          />
        </div>
      </div>
      <div className="bg-black">
        <div className="relative max-w-[1200px] mx-auto h-96 after:edge-blur-1">
          <AutoImage
            src="/dummy/cc2e.jpg"
            className="object-cover"
            alt="cc2e"
          />
        </div>
      </div>
    </Slider>
  );
};

export { Carousel };
