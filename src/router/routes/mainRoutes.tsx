import type { JSX, ReactElement } from "react";
import { MainLayout } from "../../shared/layout/auth/MainLayout"

type JSXComponent = () => JSX.Element;

export interface Route {
  path: string;
  component: JSXComponent;
  label: string;
  children?: Route[];
  icon?: ReactElement;
  viewMenu: boolean;
  protected?: boolean;
}

export const mainRoutes: Route[] = [
  {
    path: "dashboard",
    label: "Dashboard",
    component: MainLayout,
    viewMenu: true
  },
];
