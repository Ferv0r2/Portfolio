import React, {
  ChangeEvent,
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";

/* Component */
import { Button } from "components/asset/button";
import { Editor } from "components/editor/Editor";
import { CalendarWidget } from "components/calendar/CalendarWidget";
import { Milestone } from "components/milestone/Milestone";
import { MilestoneModal } from "components/modal/MilestoneModal";
import { FormWallet } from "components/wallet/FormWallet";
import { AutoImage, AutoSVG, formatDate } from "utils";

/* State */
import { milestoneState } from "stores";
import { useRecoilValue } from "recoil";

interface Props {
  wallet: Wallet;
  isSigned: boolean;
  isSigning: boolean;
  title: string;
  content: string | undefined;
  price: number;
  startDate: Date;
  endDate: Date;
  lastDate: Date;
  imageDataSrc: string;
  onChangeTitle: (e?: ChangeEvent) => void;
  onChangeContent: Dispatch<SetStateAction<string | undefined>>;
  onChangePrice: (e?: ChangeEvent) => void;
  setStartDate: Dispatch<SetStateAction<Date>>;
  setEndDate: Dispatch<SetStateAction<Date>>;
  setImageData: Dispatch<SetStateAction<any>>;
  setImageDataSrc: Dispatch<SetStateAction<string>>;
  continueHandler: () => void;
  tokenHandler: MouseEventHandler<HTMLButtonElement>;
}

const Create01: FC<Props> = ({
  wallet,
  isSigned,
  isSigning,
  title,
  content,
  price,
  startDate,
  endDate,
  lastDate,
  imageDataSrc,
  onChangeTitle,
  onChangeContent,
  onChangePrice,
  setStartDate,
  setEndDate,
  setImageData,
  setImageDataSrc,
  continueHandler,
  tokenHandler,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenStart, setIsOpenStart] = useState<boolean>(false);
  const [isOpenEnd, setIsOpenEnd] = useState<boolean>(false);
  const mileStoneArray = useRecoilValue(milestoneState);

  const uploadImageHanlder = (e: any) => {
    const formData: any = new FormData();
    formData.append("image", e.target.files[0]);

    const reader = new FileReader();

    try {
      reader.readAsDataURL(e.target.files[0]);
    } catch (err) {
      return;
    }

    setImageData(formData);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageDataSrc(String(reader.result));
        resolve;
      };
    });
  };

  return (
    <div>
      {isOpen ? (
        <MilestoneModal
          baseDate={lastDate}
          totalPrice={price}
          close={setIsOpen}
        />
      ) : (
        ""
      )}
      <div className="mt-8 p-8 pt-0 border-b">
        <div className="mt-6">
          <div className="font-semibold">사용자 확인</div>
          <div className="mt-1 flex items-center">
            <Button
              className="flex items-center bg-indigo-600 hover:bg-indigo-70 disabled:bg-indigo-400 font-medium text-white mt-1 rounded px-3 py-2"
              onClick={tokenHandler}
              disabled={isSigned}
            >
              <AutoSVG className="w-5 h-5 mr-1" src="/media/icons/edit.svg" />

              {isSigning ? (
                <span className="flex items-center justify-center">
                  <span className="mr-2">서명중...</span>
                  <div className="animate-spin">
                    <AutoSVG
                      src="/media/icons/spinner.svg"
                      className="w-6 h-6"
                    />
                  </div>
                </span>
              ) : isSigned ? (
                <span>서명됨</span>
              ) : (
                <span>서명하기</span>
              )}
            </Button>
            <div className="ml-2 text-gray-600 dark:text-gray-300">
              ※ {"<"}필수{">"} 중복 서명을 최소화하며 사용자 식별을 위한
              과정입니다.
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center font-semibold">
            <span className="mr-4">메인 이미지 업로드</span>
          </div>
          <div className="relative w-11/12 h-96 mt-2 bg-slate-100 dark:bg-dark-400 border dark:border-dark-300 rounded-lg overflow-hidden">
            <input
              type="file"
              onChange={uploadImageHanlder}
              accept="image/jpg,impge/png,image/jpeg"
              className="absolute w-full h-full opacity-0 bg-dark z-10"
            />
            {imageDataSrc ? (
              <AutoImage src={imageDataSrc} alt="img" />
            ) : (
              <>
                <div className="absolute text-center top-1/2 left-1/2 trasform -translate-x-1/2 -translate-y-1/2">
                  <AutoSVG
                    src="/media/icons/upload.svg"
                    className="w-24 h-24 dark:text-dark-200 mx-auto"
                  />
                  <p className="mt-4 text-gray-600 dark:text-gray-300">
                    ↑ 이미지를 업로드 해주세요.
                  </p>
                </div>
              </>
            )}
          </div>
          <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
            ※ 이미지 파일은 png, jpg, jpeg 확장자만 가능합니다.
          </p>
        </div>

        <div className="mt-6">
          <div className="font-semibold">프로젝트 제목</div>
          <div>
            <input
              className="form-input dark:border-dark-300 dark:bg-dark-400 dark:text-gray-300 mt-1 w-full rounded border border-gray-400 p-2"
              type="text"
              value={title}
              onChange={onChangeTitle}
              placeholder="여기에 제목을 입력해 주세요."
            />
          </div>
        </div>
        <div className="mt-6">
          <div className="font-semibold">프로젝트 설명</div>
          <Editor content={content} onChangeContent={onChangeContent} />
        </div>
        <div className="mt-6">
          <div>
            <span className="font-semibold mr-1">펀딩 목표액</span>
            <span className="text-xs text-gray-600 dark:text-dark-300">
              (단위 : BUSD)
            </span>
          </div>
          <div>
            <input
              className="form-input px-3 dark:border-dark-300 dark:bg-dark-400 dark:text-gray-300 mt-1 w-full rounded border border-gray-400 p-2"
              type="number"
              value={price}
              onChange={onChangePrice}
              placeholder="0.1"
            />
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <span className="font-semibold mr-2">펀딩 시작일</span>
                <span className="text-sm text-gray-600 dark:text-dark-300">
                  {formatDate(startDate)}
                </span>
              </div>
              <CalendarWidget
                isOpen={isOpenStart}
                date={startDate}
                setIsOpen={setIsOpenStart}
                setDate={setStartDate}
              />
            </div>
            <div>
              <div>
                <span className="font-semibold mr-2">펀딩 종료일</span>
                <span className="text-sm text-gray-600 dark:text-dark-300">
                  {formatDate(endDate)}
                </span>
              </div>
              <CalendarWidget
                isOpen={isOpenEnd}
                date={endDate}
                setIsOpen={setIsOpenEnd}
                setDate={setEndDate}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-8">
        <div className="mt-6">
          <div className="flex items-center">
            <span className="font-semibold mr-2">마일스톤</span>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-4">
            {mileStoneArray.length !== 0 ? (
              mileStoneArray.map((v, i) => (
                <div key={v.keyID} className="items-start">
                  <Milestone
                    keyID={v.keyID}
                    title={v.title}
                    content={v.content}
                    price={v.price}
                    startDate={v.startDate}
                    expired={v.expired}
                  />
                </div>
              ))
            ) : (
              <div className="inline-flex text-sm mt-2 rounded-lg border dark:border-dark-300 p-3 items-center">
                <AutoSVG className="mr-2" src="/media/icons/warning.svg" />
                <span className="pr-1 ">마일스톤을 추가해 주세요.</span>
              </div>
            )}
          </div>
          <Button
            onClick={() => setIsOpen(true)}
            className="inline-flex mt-4 group cursor-pointer shadow px-4 py-3 rounded-lg bg-indigo-600 dark:bg-indigo-700 transition-all duration-300 items-center text-sm mr-2 hover:bg-indigo-700 dark:hover:bg-indigo-800 text-white"
          >
            <AutoSVG className="w-6 h-6 mr-1" src="/media/icons/plus.svg" />
            <span className="pr-1">마일스톤 추가</span>
          </Button>
          <div className="mt-4 text-gray-600 dark:text-dark-300 text-sm">
            <p>
              ※ 마일스톤은 달성 목표와 산출물의 발표 기간이 작성돼야 합니다.
            </p>
            <p>
              ※ 매 발표 기간마다 펀딩 지속 여부를 투표하니 신중하게 작성해
              주시기 바랍니다.
            </p>
            <p>※ 마일스톤은 수정할 수 있으나 변경 내역이 모두 기록됩니다.</p>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div>
                <span className="font-semibold mr-2">프로젝트 시작일</span>
                <span className="text-sm text-gray-600 dark:text-dark-300">
                  (펀딩 시작일)
                </span>
              </div>
              <div className="mt-2 mb-5 rounded bg-neutral-100 dark:bg-dark-400 dark:border-dark-300 font-medium w-full h-10 flex items-center pl-3 text-sm border-gray-400 border">
                <AutoSVG src="/media/icons/chart.svg" className="mr-2" />
                <span>{formatDate(startDate)}</span>
              </div>
            </div>
            <div>
              <div>
                <span className="font-semibold mr-2">프로젝트 종료일</span>
                <span className="text-sm text-gray-600 dark:text-dark-300">
                  (마지막 마일스톤 마감일)
                </span>
              </div>
              <div className="mt-2 mb-5 rounded bg-neutral-100 dark:bg-dark-400 dark:border-dark-300 font-medium w-full h-10 flex items-center pl-3 text-sm border-gray-400 border">
                <AutoSVG src="/media/icons/chart.svg" className="mr-2" />
                <span>
                  {mileStoneArray[mileStoneArray.length - 1]?.expired ? (
                    <span>{formatDate(lastDate)}</span>
                  ) : (
                    "마일스톤을 추가해 주세요."
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 text-gray-600 dark:text-dark-300 text-sm">
            <p>
              ※ 프로젝트는 펀딩 시작일부터 마일스톤 마감일까지의 기준입니다.
            </p>
            <p>
              ※ 모든 일정은 <strong>매 09시</strong>를 기준으로 진행됩니다.
            </p>
            <p>
              ※ 모든 마일스톤은 종료 후 DAO 투표를 진행하며, 반대표가 많을 시에
              프로젝트는 <strong>강제 종료</strong>됩니다.
            </p>
            <p>
              ※ 프로젝트 생명 주기는 펀딩 - [진행중 - 투표중](반복) -
              종료입니다.
            </p>
          </div>
        </div>

        <FormWallet address={wallet.address} />
      </div>

      <div className="grid grid-cols-2 gap-4 p-8">
        <Button
          className="col-span-2 rounded py-4 text-center font-bold text-white bg-indigo-700 hover:bg-indigo-900 disabled:bg-indigo-400"
          onClick={continueHandler}
          disabled={!wallet.address}
        >
          <span>다음 챕터로</span>
        </Button>
      </div>
    </div>
  );
};

export { Create01 };
