import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isActive: string;
  children: ReactNode
}


export const PrivateGuard = ({isActive, children}: Props) => {
  return isActive ? <>{children}</> : <Navigate to="/auth/login" replace />
}
