import { useEffect, useState } from "react";
import { useToast } from "hooks/useToast";

export const ToastWidget = () => {
  const { isToast, toastData, onClose } = useToast();
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setFade(false);
    }, 4000);
  }, [isToast]);

  return (
    <div
      className="toast-container position-fixed start-50 translate-middle-x"
      aria-live="polite"
      aria-atomic="true"
      style={{
        zIndex: 2000,
      }}
    >
      <div
        className={`animate__animated ${
          fade ? "animate__fadeIn" : "animate__fadeOut"
        } bg-${
          toastData.type || "primary"
        } animate__fast show toast align-items-center text-white border-0`}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
        data-bs-autohide="false"
      >
        <div className="d-flex mx-2">
          <div className="toast-body fs-4">{toastData.content}</div>
          <button
            type="button"
            onClick={onClose}
            className="btn-close btn-close-white me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          />
        </div>
      </div>
    </div>
  );
};
