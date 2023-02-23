import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "routes/PrivateRoutes";
import { App } from "App";

/* Pages */
import AuthPage from "pages/AuthPage";
import ErrorsPage from "pages/ErrorsPage";
import UserPage from "pages/UserPage";
import DiscordAuthPage from "pages/DiscordAuthPage";

/* Hooks */
import { useAuth } from "hooks/useAuth";

export const AppRoutes = () => {
  const { auth } = useAuth();

  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<App />}>
          <Route path="error/404" element={<ErrorsPage />} />
          <Route path="error/*" element={<Navigate to="/error/404" />} />
          {auth ? (
            <>
              <Route path="/*" element={<PrivateRoutes />} />
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />

              <Route path="user/:eid" element={<UserPage />} />
              <Route path="user/*" element={<Navigate to="/error/404" />} />
              <Route path="discord" element={<DiscordAuthPage />} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
