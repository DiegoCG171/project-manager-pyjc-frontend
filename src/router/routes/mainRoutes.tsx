import type { JSX, ReactElement } from "react";
//import { MainLayout } from "../../shared/layout/auth/MainLayout"
import { HomeOutlined, UserOutlined, DollarOutlined, BellOutlined } from "@ant-design/icons";
import { DashboardPage } from "../../features/dashboard/pages/DashboardPage"
import { ClientsPage } from "../../features/dashboard/pages/ClientsPage"
import { DealsPage } from "../../features/dashboard/pages/DealsPage"
import { TestPage1 } from "../../features/dashboard/pages/TestPage1"
import { DetailsNotificationPage } from "../../features/notification/pages/DetailsNotificationPage";

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
    component: DashboardPage,
    viewMenu: true,
    icon: <HomeOutlined/>
  },
  {
    path: 'clients',
    label: 'Clientes',
    component: ClientsPage,
    viewMenu: true,
    icon: <UserOutlined />,
  },
  {
    path: 'deals',
    label: 'Deals',
    component: DealsPage,
    viewMenu: true,
    icon: <DollarOutlined />,
  },
  {
    path: 'test',
    label: 'Test',
    component: TestPage1,
    viewMenu: true,
    icon: <DollarOutlined />,
  },
  {
    path: 'notifications/:id',
    label: 'DetallesNotificacion',
    component: DetailsNotificationPage,
    viewMenu: false,
    icon: <BellOutlined />,
  },
];
