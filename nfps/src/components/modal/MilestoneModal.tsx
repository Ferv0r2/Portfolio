import React, {
  FC,
  Dispatch,
  SetStateAction,
  useState,
  useEffect,
  useRef,
} from "react";
import { v1 } from "uuid";

/* Hook */
import useInput from "hooks/useInput";

/* Component */
import { Button } from "components/asset/button";
import { CalendarWidget } from "components/calendar/CalendarWidget";
import { AutoSVG, formatDate } from "utils";

/* State */
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  IMilestone,
  isToastState,
  milestoneState,
  toastContentState,
} from "stores";

interface Props {
  baseDate: Date;
  totalPrice: number;
  close: Dispatch<SetStateAction<boolean>>;
}

const MilestoneModal: FC<Props> = ({ baseDate, totalPrice, close }) => {
  const divRef = useRef<any>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [title, setTitle, onChangeTitle] = useInput<string>("");
  const [price, setPrice, onChangePrice] = useInput<number>(0);
  const [expired, setExpired] = useState<Date>(new Date());
  const [milestoneArray, setMilestoneArray] = useRecoilState(milestoneState);
  const [milestoneContent, setMilestoneContent] = useState<string[]>([]);
  const [value, setValue, onChangeInputValue] = useInput<string>("");
  const setIsToast = useSetRecoilState(isToastState);
  const setToastContent = useSetRecoilState(toastContentState);

  useEffect(() => {
    let temp = new Date(baseDate);
    temp.setDate(temp.getDate() + 1);
    setExpired(temp);
  }, [baseDate]);

  useEffect(() => {
    if (isOpen) {
      divRef.current.scrollTop = divRef.current?.scrollHeight;
    }
  }, [isOpen]);

  const checkRule = () => {
    if (title.length === 0) {
      setToastContent({
        content: "마일스톤 제목을 입력해 주세요.",
        type: "danger",
      });
      setIsToast(true);
      return false;
    }

    if (milestoneContent.length === 0) {
      setToastContent({
        content: "최소 1개의 산출물을 입력해 주세요.",
        type: "danger",
      });
      setIsToast(true);
      return false;
    }

    if (price > 100) {
      setToastContent({
        content: "중도금 비율은 100%를 넘을 수 없습니다.",
        type: "danger",
      });
      setIsToast(true);
      return false;
    }

    if (price < 0) {
      setToastContent({
        content: "중도금 비율은 0보다 커야합니다.",
        type: "danger",
      });
      setIsToast(true);
      return false;
    }

    return true;
  };

  const addMilestoneHandler = async () => {
    if (!checkRule()) return;

    const inputData: IMilestone = {
      keyID: `ms${v1()}`,
      title: title,
      content: milestoneContent,
      price: price,
      startDate: baseDate,
      expired: expired,
    };

    setMilestoneArray([...milestoneArray, inputData]);
    setTitle("");
    setMilestoneContent([]);
    setPrice(0);
    setExpired(new Date());
    close(false);
  };

  return (
    <>
      <div className="py-12 bg-gray-700/50 dark:bg-dark-700/50 transition duration-150 ease-in-out z-30 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-4 px-1 md:px-3 bg-white dark:bg-dark-500 shadow-md rounded border dark:border-dark-300 border-gray-400">
            <div
              ref={divRef}
              className="custom-scroll scroll-smooth pt-4 px-4 md:px-7 h-[480px] overflow-auto"
            >
              <div className="w-full flex items-center text-gray-600 dark:text-gray-400 mb-3">
                <AutoSVG
                  className="w-8 h-8 text-info mr-2"
                  src="/media/icons/polygon.svg"
                />
                <h1 className="text-gray-800 dark:text-white font-lg font-bold tracking-normal">
                  마일스톤 {milestoneArray.length + 1}
                </h1>
              </div>
              <label
                htmlFor="name"
                className="text-gray-800 dark:text-white text-sm font-bold leading-tight tracking-normal"
              >
                마일스톤 제목
              </label>
              <input
                type="text"
                value={title}
                onChange={onChangeTitle}
                className="mb-5 mt-2 dark:bg-dark-400 text-gray-600 dark:text-gray-400 focus:outline-none focus:border dark:border-dark-300 focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-400 rounded border"
                placeholder="앱 출시"
              />
              <label
                htmlFor="content"
                className="text-gray-800 dark:text-white text-sm font-bold leading-tight tracking-normal"
              >
                마일스톤 산출물
              </label>

              {milestoneContent.length > 0
                ? milestoneContent.map((v, i) => (
                    <div
                      key={v1()}
                      className="dark:bg-dark-400 text-gray-600 dark:text-gray-400 font-normal w-full h-10 flex items-center pl-1 text-sm"
                    >
                      <div className="w-1 h-4 bg-black mr-2 rounded" />
                      <span>{v}</span>
                    </div>
                  ))
                : ""}

              <input
                type="text"
                value={value}
                onChange={onChangeInputValue}
                className="mt-2 dark:bg-dark-400 text-gray-600 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-400 dark:border-dark-300 rounded border"
                placeholder="M2E 앱 안드로이드 출시"
              />

              <div className="flex items-center">
                <Button
                  onClick={() => {
                    milestoneContent.push(value);
                    setValue("");
                  }}
                  className="inline-flex mt-2 mb-5 group cursor-pointer shadow px-2 py-2.5 rounded-lg bg-indigo-600 dark:bg-indigo-700 transition-all duration-300 items-center text-xs mr-2 hover:bg-indigo-700 dark:hover:bg-indigo-800 text-white"
                >
                  <AutoSVG
                    className="w-5 h-5 mr-1"
                    src="/media/icons/plus.svg"
                  />
                  <span className="pr-1">산출물 추가</span>
                </Button>
                <Button
                  onClick={() => {
                    setMilestoneContent([]);
                  }}
                  className="inline-flex mt-2 mb-5 group cursor-pointer shadow px-2 py-2.5 rounded-lg bg-danger dark:bg-danger-active transition-all duration-300 items-center text-xs mr-2 hover:bg-danger-active dark:hover:bg-red-700 text-white"
                >
                  <AutoSVG
                    className="w-5 h-5 mr-1"
                    src="/media/icons/circle.svg"
                  />
                  <span className="pr-1">초기화</span>
                </Button>
              </div>
              <label
                htmlFor="name"
                className="text-gray-800 dark:text-white text-sm font-bold leading-tight tracking-normal"
              >
                <span className="font-semibold mr-2">마일스톤 중도금 비율</span>
                <span className="text-xs text-gray-600 dark:text-gray-400">
                  ( 단위 : % )
                </span>
              </label>
              <input
                type="number"
                value={price}
                onChange={onChangePrice}
                className="mt-2 px-2 dark:bg-dark-400 text-gray-600 dark:text-gray-400 focus:outline-none focus:border dark:border-dark-300 focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-400 rounded border"
                placeholder="10"
              />
              <p className="text-xs mt-2 mb-5">
                목표액 달성 시
                <span className="text-sm font-medium mx-1">
                  {(totalPrice * price) / 100 > totalPrice
                    ? totalPrice
                    : (totalPrice * price) / 100 > 0
                    ? (totalPrice * price) / 100
                    : 0}
                </span>
                BUSD
              </p>

              <label className="text-gray-800 dark:text-white text-sm font-bold leading-tight tracking-normal">
                <span className="font-semibold mr-2">마일스톤 시작일</span>
              </label>

              <div className="mt-2 mb-5 rounded bg-neutral-100 dark:bg-dark-400 dark:border-dark-300 font-medium w-full h-10 flex items-center pl-3 text-sm border-gray-400 border">
                <AutoSVG src="/media/icons/chart.svg" className="mr-2" />
                <span>{formatDate(baseDate)}</span>
              </div>
              <div></div>
              <label className="text-gray-800 dark:text-white text-sm font-bold leading-tight tracking-normal">
                <span className="font-semibold mr-2">마일스톤 마감일</span>
              </label>
              <CalendarWidget
                isOpen={isOpen}
                date={expired}
                setIsOpen={setIsOpen}
                setDate={setExpired}
              />
            </div>
            <div className="pb-2 flex justify-center text-sm">
              <Button
                className="w-20 mr-2 rounded text-center font-bold text-white bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400"
                onClick={() => {
                  close(false);
                  setMilestoneContent([]);
                }}
              >
                <span>취소</span>
              </Button>
              <Button
                className="w-28 rounded text-center font-bold text-white bg-indigo-700 hover:bg-indigo-900 disabled:bg-indigo-400"
                onClick={addMilestoneHandler}
              >
                <span>추가 완료</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MilestoneModal };
