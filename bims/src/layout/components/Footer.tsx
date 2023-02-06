import { FC } from "react";

/* Component */
import { useLayout } from "layout/core";

const Footer: FC = () => {
  const { classes } = useLayout();
  return (
    <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
      <div
        className={`${classes.footerContainer} d-flex flex-column flex-md-row align-items-center justify-content-between`}
      >
        <div className="text-dark order-2 order-md-1">
          <span className="text-muted fw-bold me-2">2023 &copy;</span>
          <span className="text-muted fw-bold">
            <a
              className="btn btn-link btn-color-muted btn-active-color-primary mb-1 me-1"
              href="https://github.com/Fervor2"
              target="_blank"
              rel="noreferrer"
            >
              Fervor2
            </a>
            . ALL RIGHT RESERVED.
          </span>
        </div>

        <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
          <li className="menu-item">
            <a
              target="_blank"
              href="mailto:amlk31255@gmail.com"
              className="menu-link"
              rel="noreferrer"
            >
              Contact
            </a>
          </li>
          <li className="d-flex align-items-center py-2">
            <span className="bullet bullet-vertical"></span>
          </li>
          <li className="menu-item">
            <a
              target="_blank"
              href="https://wontae.site/"
              className="menu-link"
              rel="noreferrer"
            >
              Main Site
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
