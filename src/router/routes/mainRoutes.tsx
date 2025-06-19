import type { JSX, ReactElement } from "react";
import { MainLayout } from "../../shared/layout/auth/MainLayout"
import { HomeOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";

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
    component: MainLayout,
    viewMenu: true,
    icon: <UserOutlined />,
  },
  {
    path: 'deals',
    label: 'Deals',
    component: MainLayout,
    viewMenu: true,
    icon: <DollarOutlined />,
  },
];
