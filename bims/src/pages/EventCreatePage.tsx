import { useState } from "react";
import { v1 } from "uuid";

/* Hook */
import { useCollection } from "hooks/useCollection";
import { useTutorial } from "hooks/useTutorial";
import { useBasket } from "hooks/useBasket";

/* Components */
import { EventBasket, EventMenu } from "components/card";
import { Example } from "components/item/Example";
import { TutorialToast } from "components/toast/TutorialToast";
import { InfoToast } from "components/toast/InfoToast";
import { Empty } from "components/empty/Empty";
import { KTSVG, shortAddress } from "utils";

const tutorialInfo = [
  "",
  "Select your NFT",
  "Select the item items of the event participation conditions",
  'Select item & Press the "Continue" button and Let`s create an event',
];

const tutorialPosition = ["", "bottom-50", "top-0", "top-0"];

const EventCreatePage = () => {
  const { collections } = useCollection();
  const { isTutorial, tutorialIndex, onTutorialSkip, onPrev, onNext } =
    useTutorial();
  const { eventInput, setEventInput, onReset } = useBasket();
  const [isContinue, setIsContinue] = useState<boolean>(false);
  const [isAnimate, setIsAnimate] = useState<boolean>(false);

  const continueHandler = () => {
    if (window.innerWidth < 992) window.scrollTo(0, 0);
    setIsAnimate(true);
    setTimeout(() => {
      setIsContinue(true);
      setIsAnimate(false);
    }, 900);
  };

  const backHandler = () => {
    setIsContinue(false);
    onReset();
    setEventInput({
      nftIdx: 0,
      title: "",
      content: "",
    });
  };

  return (
    <>
      {isTutorial && (
        <>
          <div className="modal-backdrop bg-dark bg-opacity-50" />
          {tutorialIndex === 0 && (
            <TutorialToast onCancel={onTutorialSkip} onTutorial={onNext} />
          )}
        </>
      )}
      <div className="row g-8 justify-lg-content-center">
        {!isContinue && (
          <>
            <div
              className={`position-relative col-lg-4 col-11 mx-lg-0 mx-auto ${
                isAnimate &&
                window.innerWidth >= 992 &&
                "animate__animated animate__fadeOutLeft"
              } ${
                isAnimate &&
                window.innerWidth < 992 &&
                "animate__animated animate__fadeOutUp"
              }`}
            >
              {isTutorial && tutorialIndex !== 0 && (
                <InfoToast
                  index={tutorialIndex}
                  title={tutorialInfo[tutorialIndex]}
                  position={tutorialPosition[tutorialIndex]}
                  onPrev={onPrev}
                  onNext={tutorialIndex < 3 ? onNext : null}
                  onDone={tutorialIndex === 3 ? onTutorialSkip : null}
                />
              )}
              <div
                className="card pb-2 mb-5"
                style={{
                  zIndex: tutorialIndex === 1 ? 1100 : "initial",
                }}
              >
                <div className="card-header border-0 pt-5">
                  <h3 className="card-title align-items-start flex-column">
                    <span className="card-label fw-bold text-dark">
                      Select NFT
                    </span>
                    <span className="text-muted mt-1 fw-semibold fs-7">
                      Event to apply
                    </span>
                  </h3>
                  <KTSVG
                    path="/media/icons/verified.svg"
                    className="svg-icon-muted svg-icon-2hx"
                  />
                </div>
                <div className="card-body px-6 py-4">
                  {collections.length > 0 ? (
                    <select
                      onChange={(e) =>
                        setEventInput({
                          ...eventInput,
                          nftIdx: Number(e.target.value),
                        })
                      }
                      defaultValue={collections[Number(eventInput.nftIdx)].name}
                      className="cursor-pointer form-select"
                      aria-label="Select Option"
                    >
                      {collections.map((nft, index) => (
                        <option key={nft.contract} value={index}>
                          {nft.name} ({shortAddress(nft.contract)})
                        </option>
                      ))}
                    </select>
                  ) : (
                    <Empty>Please register NFT first.</Empty>
                  )}
                </div>
              </div>
              <EventMenu
                style={{
                  zIndex: tutorialIndex === 2 ? 1100 : "initial",
                }}
              />
            </div>
            <div
              className={`d-lg-block d-none col-1 mt-40 ${
                isAnimate && "animate__animated animate__fadeOutLeft"
              }`}
            >
              {[...Array(3)].map((v) => (
                <KTSVG
                  key={v1()}
                  path="/media/icons/arrow-right.svg"
                  className="d-flex justify-content-center py-6 svg-icon-4x text-primary"
                />
              ))}
            </div>
            <div
              className={`d-lg-none d-flex justify-content-center ${
                isAnimate && "animate__animated animate__fadeOutLeft"
              }`}
            >
              {[...Array(3)].map((v) => (
                <KTSVG
                  key={v1()}
                  path="/media/icons/arrow-bottom.svg"
                  className="d-flex justify-content-center py-6 svg-icon-4x text-primary"
                />
              ))}
            </div>
          </>
        )}

        <div
          className={`col-lg-5 col-11 mx-lg-0 mx-auto  ${
            isAnimate &&
            window.innerWidth >= 992 &&
            "animate__animated animate__slideOutLeft"
          } ${
            isAnimate &&
            window.innerWidth < 992 &&
            "animate__animated animate__fadeOutUp"
          }`}
          style={{
            zIndex: tutorialIndex === 3 ? 1100 : "initial",
          }}
        >
          <EventBasket
            nft={collections[Number(eventInput.nftIdx)]}
            isContinue={isContinue}
            isAnimate={isAnimate}
            continueHandler={continueHandler}
            backHandler={backHandler}
          />
        </div>

        {isContinue && (
          <div className="col-lg-5 col-11 mx-auto animate__animated animate__fadeIn animate__faster">
            <Example nft={collections[eventInput.nftIdx]} />
          </div>
        )}
      </div>
    </>
  );
};

export default EventCreatePage;
