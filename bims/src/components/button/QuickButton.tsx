import { FC, MouseEventHandler } from "react";
import { KTSVG } from "utils";

interface Props {
  title: string;
  icon: string;
  color: string;
  onClicked: MouseEventHandler<HTMLButtonElement>;
}

export const QuickButton: FC<Props> = ({ title, icon, color, onClicked }) => {
  return (
    <button
      type="button"
      onClick={onClicked}
      className={`col btn btn-light-${color} btn-color-${color} px-6 py-8 rounded-0`}
    >
      <KTSVG
        path={`/media/icons/${icon}.svg`}
        className={`svg-icon-3x svg-icon-${color} d-block my-2`}
      />
      {title}
    </button>
  );
};
