import type { JSX } from "react";
import { TestPage1 } from "../TestPage1";

type JSXComponent = () => JSX.Element;

export interface Route {
    path: string;
    label: string;
    component: JSXComponent;
}

export const mainRoutes: Route[] = [
    {
        path: 'dashboard',
        label: 'Dashboard',
        component: TestPage1
    },
]