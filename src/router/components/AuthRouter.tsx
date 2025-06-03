import { Navigate, Route, Routes } from "react-router-dom";
import { authRoutes } from "../routes/authRoutes";
import { AuthLayout } from "../../shared/layout/auth/AuthLayout";

export const AuthRouter = () => {
  return (
    <AuthLayout>
      <Routes>
        {authRoutes.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
        <Route path="/*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </AuthLayout>
  );
};
