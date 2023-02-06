import { FC, MouseEventHandler } from "react";

interface Props {
  onCancel: MouseEventHandler<HTMLButtonElement>;
  onTutorial: MouseEventHandler<HTMLButtonElement>;
}

export const TutorialToast: FC<Props> = ({ onCancel, onTutorial }) => {
  return (
    <>
      <div
        className="toast-container position-fixed start-50 translate-middle-x rounded bg-white"
        style={{
          zIndex: 1099,
        }}
      >
        <div
          className={`animate__animated animate__fast show toast align-items-center border-0`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
          data-bs-autohide="false"
        >
          <div className="toast-header p-8 text-center">
            <div className="text-info fw-bold fs-3">
              Do you want an event creation <strong>tutorial?</strong>
            </div>
            <div></div>
          </div>
          <div className="toast-body d-flex justify-content-end bg-light-info rounded-bottom">
            <button
              type="button"
              onClick={onCancel}
              className="btn btn-danger me-2"
            >
              No, Thanks.
            </button>
            <button
              type="button"
              onClick={onTutorial}
              className="btn btn-primary"
            >
              Yes, I want.
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
