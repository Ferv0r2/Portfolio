import { FC } from "react";
import { useBasket } from "hooks/useBasket";
import { KTSVG, snsArray } from "utils";

interface Props {
  className?: string;
  style?: any;
}

export const EventMenu: FC<Props> = ({ className, style }) => {
  const { onAddBasket } = useBasket();

  return (
    <div className={`card ${className}`} style={style}>
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold text-dark">Event Menu</span>
          <span className="text-muted mt-1 fw-semibold fs-7">Social Items</span>
        </h3>
        <KTSVG
          path="/media/icons/shopping-bag.svg"
          className="svg-icon-muted svg-icon-2hx"
        />
      </div>

      <div className="card-body p-4">
        {snsArray.map((sns) => (
          <div
            onClick={() => onAddBasket(sns)}
            className="d-flex align-items-center mb-4 cursor-pointer px-4 py-2 bg-hover-light-primary rounded"
          >
            <div className="symbol symbol-50px me-5">
              <span className={`symbol-label bg-light-${sns.type}`}>
                <KTSVG
                  path={`/media/svg/social-logos/${sns.sns.toLowerCase()}.svg`}
                  className={`svg-icon-2x svg-icon-${sns.type}`}
                />
              </span>
            </div>
            <div className="d-flex flex-column">
              <span className={`text-dark text-hover-${sns.type} fs-6 fw-bold`}>
                {sns.sns}
              </span>
              <span className="text-muted fw-semibold">
                {sns.options.join(", ")}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
