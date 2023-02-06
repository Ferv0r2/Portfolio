import { FC, MouseEventHandler } from "react";

/* Component */
import { KTSVG } from "utils";

interface Props {
  index: number;
  title: string;
  position: string;
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement> | null;
  onDone: MouseEventHandler<HTMLButtonElement> | null;
}

export const InfoToast: FC<Props> = ({
  index,
  title,
  position,
  onPrev,
  onNext,
  onDone,
}) => {
  return (
    <div
      className={`position-absolute ${position} card card-custom border border-2 border-info shadow`}
      style={{
        zIndex: 1100,
      }}
    >
      <div className={`card-header ${index !== 1 && "pt-4"} border-0`}>
        <h3 className="card-title me-4 fs-5">Step {index}</h3>
        <h3 className="card-title me-4 fs-5">
          <span className="bullet bullet-vertical bg-info h-20px me-3" />
          {title}
        </h3>
      </div>
      <div className="card-footer d-flex justify-content-end p-0 pb-4 pe-8 border-0">
        <button
          type="button"
          onClick={onPrev}
          className="btn btn-sm btn-light-danger me-2"
        >
          Prev
          <KTSVG path="/media/icons/arrow-left.svg" className="svg-icon ms-2" />
        </button>
        {onNext && (
          <button
            type="button"
            onClick={onNext}
            className="btn btn-sm btn-light-primary"
          >
            Next
            <KTSVG
              path="/media/icons/arrow-right.svg"
              className="svg-icon ms-2"
            />
          </button>
        )}
        {onDone && (
          <button
            type="button"
            onClick={onDone}
            className="btn btn-sm btn-primary"
          >
            OK
          </button>
        )}
      </div>
    </div>
  );
};
