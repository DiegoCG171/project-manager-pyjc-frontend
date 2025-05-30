import type { JSX } from "react";
import { TestPage1 } from "../TestPage1";
import { TesPage2 } from "../TesPage2";

type JSXComponent = () => JSX.Element;

export interface Route {
    path: string;
    label: string;
    component: JSXComponent;
}

export const authRoutes: Route[] = [
    {
        path: 'login',
        label: 'Login',
        component: TestPage1
    },
    {
        path: 'forgot-password',
        label: 'Olvide contraseña',
        component: TesPage2
    }
]