import type { JSX, ReactElement } from "react";
import { TestPage1 } from "../TestPage1";

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
    component: TestPage1,
    viewMenu: true
  },
];
