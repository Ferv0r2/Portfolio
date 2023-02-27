import React, { Fragment, useEffect, useState } from "react";
import { NextPage } from "next/types";
import clsx from "clsx";

/* Hook */
import { useInput } from "hooks/useInput";
import { useAuth } from "hooks/useAuth";
import { useToast } from "hooks/useToast";

/* Component */
import { Create01, Create02, Create03 } from "components/section";
import { dateGap } from "utils";

const Create: NextPage = () => {
  const { account } = useAuth();
  const { onUpdate } = useToast();
  const [mileStoneArray, setMileStoneArray] = useState([]);
  const [isTap, setIsTap] = useState<number>(0);
  const [currentKey, setCurrentKey] = useState<string>("");
  const [title, setTitle, onChangeTitle] = useInput<string>("");
  const [content, setContent] = useState<string | undefined>(
    "### 여기에 설명을 입력해 주세요."
  );
  const [price, setPrice, onChangePrice] = useInput<number>(0);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [lastDate, setLastDate] = useState<Date>(new Date());
  const [imageData, setImageData] = useState<any>(null);
  const [imageDataSrc, setImageDataSrc] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const [isSigning, setIsSigning] = useState<boolean>(false);

  useEffect(() => {
    let stDt = new Date();
    let endDt = new Date();
    stDt.setDate(stDt.getDate() + 1);
    endDt.setDate(endDt.getDate() + 2);

    sessionStorage.getItem("FUNDING_TOKEN") && setIsSigned(true);
    setStartDate(stDt);
    setEndDate(endDt);
  }, []);

  useEffect(() => {
    if (mileStoneArray.length > 0) {
      const dates = mileStoneArray
        .map((v) => v.expired)
        .reduce((prev, curr) =>
          new Date(prev).getTime() <= new Date(curr).getTime() ? curr : prev
        );
      setLastDate(dates);
    } else {
      setLastDate(endDate);
    }
  }, [endDate, mileStoneArray]);

  const checkRule = () => {
    if (title.length === 0) {
      onUpdate({
        content: "프로젝트 제목을 입력해 주세요.",
        type: "danger",
      });
      return false;
    }

    if (content?.length === 0) {
      onUpdate({
        content: "프로젝트 설명을 입력해 주세요.",
        type: "danger",
      });
      return false;
    }

    if (price <= 0) {
      onUpdate({
        content: "펀딩 목표비용은 0보다 커야합니다.",
        type: "danger",
      });
      return false;
    }

    if (startDate.getTime() < Date.now()) {
      onUpdate({
        content: "시작 날짜는 금일보다 커야합니다.",
        type: "danger",
      });
      return false;
    }

    const middle: number = mileStoneArray?.reduce(
      (prev, curr) => Number(prev) + Number(curr.price),
      0
    );
    if (middle !== 100) {
      onUpdate({
        content: "중도금은 100%로 설정돼야 합니다.",
        type: "danger",
      });
      return false;
    }

    return true;
  };

  const continueHandler = () => {
    if (checkRule()) {
      window.scrollTo(0, 0);
      setIsTap(1);
    }
  };

  const uploadBackend = async (tokenId: number) => {
    const mileStoneContent: any = mileStoneArray.map((v, i) => {
      const contentAry = v.content.map((v) => {
        return {
          title: v,
        };
      });
      return {
        order: i,
        title: v.title,
        output: contentAry,
      };
    });

    const fundingData: ICreateFundingAPI = {
      token_id: tokenId,
      title: title,
      content: String(content),
      milestone: mileStoneContent,
    };

    await CreateFundingAPI(fundingData);

    onUpdate({
      content: "프로젝트가 성공적으로 등록되었습니다.",
      type: "success",
    });

    return true;
  };

  const registerHandler = async () => {
    if (!checkRule()) return;
    setIsLoading(true);

    const contract = await uploadContract();
    const backend = await uploadBackend(contract);
    if (backend) {
      setTitle("");
      setContent("");
      setPrice(0);
      setMileStoneArray([]);
      setIsTap(2);
      window.scrollTo(0, 0);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-600">
      <div className="max-w-[1200px] mx-auto pt-12 pb-40">
        <div className="grid grid-cols-7 content-center font-manrope">
          <div className="rounded-xl col-start-2 col-span-5 border shadow bg-white dark:bg-dark dark:border-dark-300">
            <div className="grid grid-cols-8 gx-4 break-words font-bold border-b dark:border-dark-300 p-8">
              {chapter.map((v, i) => (
                <Fragment key={v}>
                  <div className="col-span-2 items-center justify-center">
                    <div
                      className={clsx(
                        "border w-8 h-8 mx-auto text-center leading-7 text-white font-bold rounded-full",
                        isTap === i
                          ? "bg-indigo-700 border-indigo-700"
                          : "bg-indigo-400 border-indigo-400"
                      )}
                    >
                      {i + 1}
                    </div>
                    <div className="mt-2 text-center text-sm py-2 whitespace-pre-wrap">
                      {v}
                    </div>
                  </div>
                  {i !== 2 ? (
                    <div className="col-span-1 flex items-center">
                      <hr className="w-3/4 mx-auto"></hr>
                    </div>
                  ) : (
                    ""
                  )}
                </Fragment>
              ))}
            </div>

            {isTap === 0 ? (
              <Create01
                wallet={wallet}
                isSigned={isSigned}
                isSigning={isSigning}
                title={title}
                content={content}
                price={price}
                startDate={startDate}
                endDate={endDate}
                lastDate={lastDate}
                imageDataSrc={imageDataSrc}
                onChangeTitle={onChangeTitle}
                onChangeContent={setContent}
                onChangePrice={onChangePrice}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
                setImageData={setImageData}
                setImageDataSrc={setImageDataSrc}
                continueHandler={continueHandler}
                tokenHandler={tokenHandler}
              />
            ) : (
              ""
            )}
            {isTap === 1 ? (
              <Create02
                wallet={wallet}
                isLoading={isLoading}
                title={title}
                image={imageDataSrc}
                content={String(content)}
                price={price}
                startDate={startDate}
                endDate={endDate}
                expired={Math.floor(dateGap(startDate, new Date()) / 1000)}
                setIsTap={setIsTap}
                registerHandler={registerHandler}
              />
            ) : (
              ""
            )}
            {isTap === 2 ? <Create03 currentKey={currentKey} /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

const chapter = [
  "프로젝트 정보를 입력해 주세요.",
  "프로젝트 데모를 확인해 주세요.",
  "펀딩 SBT 생성 완료!\n프로젝트를 확인해 보세요.",
];

export default Create;
