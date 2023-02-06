import { FC } from "react";

/* Component */
import { useLayout } from "layout/core";
import { KTSVG, WithChildren } from "utils";

interface Props {
  title: string;
  icon?: string;
  fontIcon?: string;
}

export const AsideMenuUser: FC<Props & WithChildren> = ({
  children,
  title,
  icon,
  fontIcon,
}) => {
  const { config } = useLayout();
  const { aside } = config;

  return (
    <div className="menu-item menu-user pb-6">
      <div className="d-flex align-items-center px-8 py-4 rounded border border-light mx-7">
        {icon && aside.menuIcon === "svg" && (
          <span className="menu-icon">
            <KTSVG path={icon} className="svg-icon-2" />
          </span>
        )}
        <span className="menu-wallet-title px-md-3 px-6 text-light">
          {title}
        </span>
        {children}
      </div>
    </div>
  );
};
