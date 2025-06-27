import type { JSX, ReactElement } from "react";
import { MainLayout } from "../../shared/layout/auth/MainLayout"
import { HomeOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import { TesPage2 } from "../TesPage2";
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
    component: MainLayout,
    viewMenu: true,
    icon: <HomeOutlined/>
  },
  {
    path: 'clients',
    label: 'Clientes',
    component: TesPage2,
    viewMenu: true,
    icon: <UserOutlined />,
  },
  {
    path: 'deals',
    label: 'Deals',
    component: TestPage1,
    viewMenu: true,
    icon: <DollarOutlined />,
  },
];
