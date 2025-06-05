import { BrowserRouter, Route, Routes } from "react-router-dom";
import { PublicGuard } from "../guards/PublicGuard";
import { AuthRouter } from "./AuthRouter";
import { PrivateGuard } from "../guards/PrivateGuard";
import { MainRouter } from "./MainRouter";
import { VersionDisplay } from "../../shared/components/VersionDisplay";
import { Logo } from "../../shared/components/Logo";
import { useAppSelector } from "../../store/hooks/reduxHooks";

export const AppRouter = () => {
  const { id } = useAppSelector(state => state.auth.user)
  
  return (
    <BrowserRouter
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <Routes>
        <Route path="/auth/*" element={
          <PublicGuard isActive={id}>
            <AuthRouter />
          </PublicGuard>
        } />
        <Route path="/*" element={
          <PrivateGuard isActive={id}>
            <MainRouter />
          </PrivateGuard>
        } />
      </Routes>
      <Logo />
      <VersionDisplay />
    </BrowserRouter>
  );
};
