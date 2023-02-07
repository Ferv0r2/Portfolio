import {
  FC,
  useEffect,
  useRef,
  MouseEventHandler,
  useState,
  useMemo,
} from "react";
import { v1 } from "uuid";

/* Components */
import { Editor } from "components/editor/Editor";
import { InputWidget } from "components/input/InputWidget";
import { Empty } from "components/empty/Empty";
import { KTSVG, Project, setColor } from "utils";

/* Hook */
import { useToast } from "hooks/useToast";

/* State */
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  basketState,
  eventInputState,
  inputState,
  itemOptionState,
  resultState,
} from "stores";

interface Props {
  nft: Project;
  className?: string;
  isContinue: boolean;
  isAnimate: boolean;
  continueHandler: MouseEventHandler<HTMLButtonElement>;
  backHandler: MouseEventHandler<HTMLButtonElement>;
}

const EventBasket: FC<Props> = ({
  className,
  nft,
  isContinue,
  isAnimate,
  continueHandler,
  backHandler,
}) => {
  const { onUpdate } = useToast();
  const [eventBasket, setEventBasket] = useRecoilState(basketState);
  const [optionMap, setOptionMap] = useRecoilState(itemOptionState);
  const [eventInput, setEventInput] = useRecoilState(eventInputState);
  const [accIndex, setAccIndex] = useState(-1);
  const setIsInput = useSetRecoilState(inputState);
  const setResult = useSetRecoilState(resultState);
  const animateEventRef = useRef<HTMLDivElement | null>(null);
  const animateBtnRef = useRef<HTMLButtonElement | null>(null);

  const mapping = useMemo(() => {
    const defaultMap = new Map();
    for (let i = 0; i < eventBasket.length; i++) {
      defaultMap.set(i, eventBasket[i].options[0]);
    }
    return defaultMap;
  }, [eventBasket]);

  const options = useMemo(() => {
    return eventBasket;
  }, [eventBasket]);

  useEffect(() => {
    setOptionMap(new Map(mapping));
  }, [setOptionMap, mapping]);

  useEffect(() => {
    if (isContinue) {
      const animates = [
        "animate__animated",
        "animate__fadeIn",
        "animate__faster",
      ];

      for (let animate of animates) {
        animateEventRef.current?.classList.add(animate);
        animateBtnRef.current?.classList.add(animate);
      }

      setTimeout(() => {
        for (let animate of animates) {
          animateEventRef.current?.classList.remove(animate);
          animateBtnRef.current?.classList.remove(animate);
        }
      }, 300);
    }
  }, [isContinue]);

  const titleRuler = (e: any) => {
    if (e.target.value.length > 60) {
      onUpdate({
        content: "Enter up to 60 words",
        type: "danger",
      });
    }
    setEventInput({
      ...eventInput,
      title: e.target.value,
    });
  };

  const resetHandler = () => {
    setEventBasket([]);
    setResult([]);
    setEventInput({
      nftIdx: 0,
      title: "",
      content: "",
    });
    setAccIndex(-1);
    setOptionMap(new Map());
    setIsInput(new Map());
  };

  return (
    <div className={`card ${className}`}>
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">Event Basket</span>
          <span className="text-muted mt-1 fw-semibold fs-7">
            Maximum 10 Event
          </span>
        </h3>
        <KTSVG
          path="/media/icons/basket.svg"
          className="d-flex svg-icon-muted svg-icon-2hx"
        />
      </div>

      <div
        ref={animateEventRef}
        className="card-body card-scroll h-lg-550px h-350px  p-4"
      >
        {isContinue ? (
          <div className="px-2 pb-4">
            <div className="pb-4">
              <label className="form-label required px-2">Event Title</label>
              <input
                type="text"
                value={eventInput.title}
                onChange={titleRuler}
                className="form-control"
                name="title"
                placeholder="Example Title ( Maximum 60 words )"
              />
            </div>
            <Editor />
          </div>
        ) : (
          ""
        )}

        <div className="accordion px-2" id="basket_accordion">
          {eventBasket?.length ? (
            options.map((event, i) => {
              const key = v1();
              return (
                <div
                  key={key}
                  className={`align-items-center ribbon ribbon-top ribbon-vertical justify-content-between rounded ${
                    isContinue
                      ? "accordion-item"
                      : `d-flex px-4 py-2 mb-4 cursor-pointer bg-hover-light-${setColor(
                          event.sns
                        )}`
                  }`}
                >
                  <div
                    className={`align-items-center ${
                      isContinue && "accordion-header"
                    }`}
                    id={String(key)}
                  >
                    {isContinue ? (
                      <div
                        className={`accordion-button cursor-pointer fs-4 fw-bold collapsed text-dark text-hover-${setColor(
                          event.sns
                        )}`}
                        data-bs-toggle="collapse"
                        data-bs-target={`#body_${key}`}
                        aria-expanded="true"
                        aria-controls={`body_${key}`}
                      >
                        <div className="symbol symbol-50px me-5">
                          <span
                            className={`symbol-label bg-light-${setColor(
                              event.sns
                            )}`}
                          >
                            <KTSVG
                              path={`/media/svg/social-logos/${event.sns.toLowerCase()}.svg`}
                              className={`svg-icon-2x svg-icon-${setColor(
                                event.sns
                              )}`}
                            />
                          </span>
                        </div>
                        {event.sns}
                        <div className="text-muted fs-6 px-2">
                          ({optionMap.get(i)})
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="symbol symbol-50px me-5">
                          <span
                            className={`symbol-label bg-light-${setColor(
                              event.sns
                            )}`}
                          >
                            <KTSVG
                              path={`/media/svg/social-logos/${event.sns.toLowerCase()}.svg`}
                              className={`svg-icon-2x svg-icon-${setColor(
                                event.sns
                              )}`}
                            />
                          </span>
                        </div>
                        <span
                          className={`text-dark text-hover-${setColor(
                            event.sns
                          )} fs-4 fw-bold `}
                        >
                          {event.sns}
                        </span>
                      </>
                    )}
                  </div>

                  {isContinue ? (
                    <div
                      id={`body_${key}`}
                      className={`accordion-collapse collapse ${
                        i === accIndex && "show"
                      }`}
                      aria-labelledby={`header_${String(key)}`}
                      data-bs-parent="#basket_accordion"
                      onClick={() => setAccIndex(i)}
                    >
                      <div className="accordion-body">
                        <InputWidget
                          id={`i${key}`}
                          sns={event.sns}
                          option={optionMap.get(i)}
                          contract={nft.contract}
                          chain_id={nft.chain_id}
                          index={i}
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <select
                        className="form-select cursor-pointer w-lg-200px"
                        aria-label="Select Option"
                        value={optionMap.get(i)}
                        onChange={(e) =>
                          setOptionMap(
                            new Map(optionMap.set(i, e.target.value))
                          )
                        }
                      >
                        {event.options.map((option) => (
                          <option
                            key={v1()}
                            className="fw-semibold"
                            value={option}
                          >
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <Empty>Please select an event item.</Empty>
          )}
        </div>
      </div>
      {/* end::Body */}
      {eventBasket.length > 0 && (
        <div className="card-footer">
          <div className="float-end me-4">
            {!isContinue ? (
              <>
                <button
                  type="button"
                  onClick={resetHandler}
                  className="btn btn-light-danger me-3"
                  disabled={isAnimate}
                >
                  Reset
                </button>
                <button
                  type="button"
                  onClick={continueHandler}
                  disabled={isAnimate}
                  className="btn btn-primary"
                >
                  Continue
                </button>
              </>
            ) : (
              <button
                ref={animateBtnRef}
                onClick={backHandler}
                className="btn btn-light-danger"
                type="button"
              >
                Cancel
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export { EventBasket };
