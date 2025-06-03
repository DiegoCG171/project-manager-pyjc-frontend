import type { ReactNode } from "react";
import { Navigate } from "react-router-dom"

interface Props {
  isActive: string;
  children: ReactNode
}

export const PublicGuard = ({isActive, children}: Props) => {
  return isActive ? <Navigate to="/dashboard" replace /> : <>{children}</>
}
