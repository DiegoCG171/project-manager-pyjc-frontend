import type { JSX } from "react";
import { ForgotPassword } from "../../features/auth/pages/ForgotPasswordPage";
import { LoginPage } from "../../features/auth/pages/LoginPage";
import { SendCodePage } from "../../features/auth/pages/SendCodePage";
import { ChangePassword } from "../../features/auth/pages/ChangePasswordPage";

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
        component: SendCodePage
    },
    {
        path: 'change-password',
        label: 'Cambiar Contraseña',
        component: ChangePassword
    }
]