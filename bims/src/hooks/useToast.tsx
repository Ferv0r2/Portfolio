import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { Toast, toastDataState, toastShowState } from "stores";

export const useToast = () => {
  const [isToast, setIsToast] = useRecoilState(toastShowState);
  const [toastData, setToastData] = useRecoilState(toastDataState);

  useEffect(() => {
    let timer;
    if (isToast) {
      timer = setTimeout(() => {
        setIsToast(false);
      }, 2500);
    } else {
      clearTimeout(timer);
    }
  }, [isToast, setIsToast]);

  const onUpdate = (data: Toast) => {
    setToastData(data);
    setIsToast(true);
  };

  const onClose = () => {
    setIsToast(false);
  };

  return {
    isToast,
    toastData,
    onUpdate,
    onClose,
  };
};
