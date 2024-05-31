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
          <span className="text-muted fw-bold">&copy; 2024. Ferv0r2 ALL RIGHTS RESERVED.
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
              href="https://ferv0r2.github.io/"
              className="menu-link"
              rel="noreferrer"
            >
              Blog
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { Footer };
