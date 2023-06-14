import { AutoImage } from "@/utils";
import React from "react";

export const Footer = () => {
  return (
    <footer className="p-5 mx-auto text-base font-[NanumSquareBold] w-full bg-black">
      <div className="block lg:flex text-gray-50 lg:max-w-3xl max-w-xl mx-auto">
        <div className="flex">
          <figure className="hidden sm:block relative w-20 mx-auto">
            <img src="/media/logos/footer_logo.png" alt="footer_logo" />
          </figure>
          <div className="p-8 text-sm sm:text-base">
            <p>
              CEO. Keplin <br />
              Addr. 서울특별시 중구 을지로 1가 케플러연구소 (가상) <br />
              COPYRIGHTⓒ 2022. K452. ALL RIGHT RESERVED.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
