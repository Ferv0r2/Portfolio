import { Fragment } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "layout/MasterLayout";

/* Pages */
import DashboardPage from "pages/DashboardPage";
import NFTManagementPage from "pages/NFTManagementPage";
import NFTHomePage from "pages/NFTHomePage";
import NFTEventPage from "pages/NFTEventPage";
import EventCreatePage from "pages/EventCreatePage";
import EventStatusPage from "pages/EventStatusPage";
import EventDetailPage from "pages/EventDetailPage";
import DiscordAuthPage from "pages/DiscordAuthPage";

/* Hooks */
import { useCollection } from "hooks/useCollection";

export const PrivateRoutes = () => {
  const { collections } = useCollection();

  return (
    <Routes>
      <Route path="discord" element={<DiscordAuthPage />} />
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path="auth/*" element={<Navigate to="/dashboard" />} />
        {/* Pages */}
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="nft/*" element={<Navigate to="/nft/management" />} />
        <Route path="nft/management" element={<NFTManagementPage />} />
        <Route
          path="nft/collections/*"
          element={<Navigate to={`/nft/management`} />}
        />
        {collections?.map((nft) => {
          return (
            <Fragment key={nft.contract}>
              <Route
                path={`nft/${nft.contract}/*`}
                element={<Navigate to={`/nft/${nft.contract}/home`} />}
              />
              <Route
                path={`nft/${nft.contract}/home`}
                element={<NFTHomePage nft={nft} />}
              />
              <Route
                path={`nft/${nft.contract}/event`}
                element={<NFTEventPage nft={nft} />}
              />
              <Route
                path={`nft/${nft.contract}/event/:eid`}
                element={<EventDetailPage />}
              />
            </Fragment>
          );
        })}
        <Route path="event/create" element={<EventCreatePage />} />
        <Route
          path="event/live"
          element={<EventStatusPage collection={collections} />}
        />
        <Route
          path="event/end"
          element={<EventStatusPage collection={collections} />}
        />
        <Route
          path="event/pending"
          element={<EventStatusPage collection={collections} />}
        />
        <Route path="event/*" element={<Navigate to="/event/live" />} />
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};
