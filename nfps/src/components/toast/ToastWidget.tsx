import React, { FC, useEffect, useState } from "react";

/* State */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isToastState, toastContentState } from "stores";

const ToastWidget: FC = () => {
  const [fade, setFade] = useState(true);
  const setIsToast = useSetRecoilState(isToastState);
  const toastContent = useRecoilValue(toastContentState);

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
    }, 3500);
  }, []);

  return (
    <div
      onClick={() => setIsToast(false)}
      className={`fixed cursor-pointer top-24 left-1/2 transform text-white -translate-x-1/2 w-80 p-2 shadow rounded-lg z-40 animate__animated ${
        fade ? "animate__fadeIn" : "animate__fadeOut"
      } animate__animated animate__fast bg-${
        toastContent.type || "primary"
      } items-center`}
    >
      <div className="flex mx-2">
        <p>{toastContent.content}</p>
      </div>
    </div>
  );
};

export { ToastWidget };
