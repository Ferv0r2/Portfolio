import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

/* Layout */
import { HeaderWrapper } from "layout/components/header/HeaderWrapper";
import { ScrollTop } from "layout/components/ScrollTop";
import { AsideDefault } from "layout/components/aside/AsideDefault";
import { Content } from "layout/components/Content";
import { Footer } from "layout/components/Footer";
import { PageDataProvider } from "layout/core";
import { MenuComponent } from "assets/ts/components";

/* Hook */
import { useToast } from "hooks/useToast";

/* Component */
import { ThemeModeProvider } from "components/theme-mode";
import { ToastWidget } from "components/toast/ToastWidget";

export const MasterLayout = () => {
  const { isToast } = useToast();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key]);

  return (
    <PageDataProvider>
      <ThemeModeProvider>
        {isToast && <ToastWidget />}
        <div className="page d-flex flex-row flex-column-fluid">
          <AsideDefault />
          <div
            className="wrapper d-flex flex-column flex-row-fluid"
            id="kt_wrapper"
          >
            <HeaderWrapper />

            <div
              id="kt_content"
              className="content d-flex flex-column flex-column-fluid"
            >
              <div className="post d-flex flex-column-fluid" id="kt_post">
                <Content>
                  <Outlet />
                </Content>
              </div>
            </div>
            <Footer />
          </div>
        </div>

        <ScrollTop />
      </ThemeModeProvider>
    </PageDataProvider>
  );
};
