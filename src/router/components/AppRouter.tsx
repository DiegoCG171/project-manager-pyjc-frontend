import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicGuard } from "../guards/PublicGuard";
import { AuthRouter } from "./AuthRouter";
import { PrivateGuard } from "../guards/PrivateGuard";
import { MainRouter } from "./MainRouter";
import { VersionDisplay } from "../../shared/components/VersionDisplay";
import { Logo } from "../../shared/components/Logo";

export const AppRouter = () => {

  const user = {
    id: '',
    name: ''
  }

  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/auth/*" element={
          <PublicGuard isActive={user.id}>
            <AuthRouter />
          </PublicGuard>
        } />
        <Route path="/*" element={
          <PrivateGuard isActive={user.id}>
            <MainRouter />
          </PrivateGuard>
        } />
      </Routes>
      <Logo />
      <VersionDisplay />
    </BrowserRouter>
  );
};
