import { FC } from "react";
import { WithChildren } from "utils";

export const Empty: FC<WithChildren> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-header border-0 align-items-center">
        <h3 className="card-title">
          <span className="bullet bullet-vertical h-20px me-3" />
          <span className="card-label fw-bold text-dark fs-5">{children}</span>
        </h3>
      </div>
    </div>
  );
};
