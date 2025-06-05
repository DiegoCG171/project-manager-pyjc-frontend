import type { JSX } from "react";
import { TesPage2 } from "../TesPage2";
import { ForgotPassword } from "../../features/auth/pages/ForgotPasswordPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";

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
        component: LoginPage
    },
    {
        path: 'forgot-password',
        label: 'Olvide Contraseña',
        component: ForgotPassword
    },
    {
        path: 'send-code',
        label: 'Enviar Código',
        component: TesPage2
    },
    {
        path: 'change-password',
        label: 'Cambiar Contraseña',
        component: TesPage2
    }
]