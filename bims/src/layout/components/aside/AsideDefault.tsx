import { FC, useRef } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";

/* Component */
import { useLayout } from "layout/core";
import { AsideMenu } from "layout/components/aside/AsideMenu";
import { KTSVG } from "utils";

const AsideDefault: FC = () => {
  const { config, classes } = useLayout();
  const asideRef = useRef<HTMLDivElement | null>(null);
  const { aside } = config;

  const minimize = () => {
    asideRef.current?.classList.add("animating");
    setTimeout(() => {
      asideRef.current?.classList.remove("animating");
    }, 300);
  };

  return (
    <div
      id="kt_aside"
      className={clsx("aside", classes.aside.join(" "))}
      data-kt-drawer="true"
      data-kt-drawer-name="aside"
      data-kt-drawer-activate="{default: true, lg: false}"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'200px', '300px': '250px'}"
      data-kt-drawer-direction="start"
      data-kt-drawer-toggle="#kt_aside_mobile_toggle"
      ref={asideRef}
    >
      <div className="aside-logo flex-column-auto" id="kt_aside_logo">
        <Link to="/dashboard">
          <div className="d-flex align-items-center">
            <img
              alt="Logo"
              className="h-25px logo"
              src="/media/logos/favicon.ico"
            />
            <h4 className="menu-title m-3 text-light">BIMS</h4>
          </div>
        </Link>
        {aside.minimize && (
          <div
            id="kt_aside_toggle"
            className="block btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle"
            data-kt-toggle="true"
            data-kt-toggle-state="active"
            data-kt-toggle-target="body"
            data-kt-toggle-name="aside-minimize"
            onClick={minimize}
          >
            <KTSVG
              path={"/media/icons/next-twice.svg"}
              className={"svg-icon-1 rotate-180"}
            />
          </div>
        )}
      </div>
      <div className="aside-menu flex-column-fluid">
        <AsideMenu asideMenuCSSClasses={classes.asideMenu} />
      </div>
    </div>
  );
};

export { AsideDefault };
