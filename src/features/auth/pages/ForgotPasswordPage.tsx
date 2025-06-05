import { Space } from "antd";
import { useBreakpoint } from "../../../hooks/useBreakpoint"
import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";

export const ForgotPassword = () => {
  const breakpoint = useBreakpoint();
  const smallScreen = ["xs", "sm"].includes(breakpoint)
  return (
    <Space direction="vertical" size={24} style={{ width: smallScreen ? "80%" : "55%", marginTop: 24 }}>
      <AuthFormHeader title="¿Olvidate tu contraseña?" subtitle="Ingresa tu correo y te enviaremos un código de verificación de 6 dígitos para restablecer tu contraseña." />
      <ForgotPasswordForm />
      <AuthFormFooter question="¿Recuerdas tu contraseña?" navigatePath="auth/login"/>
    </Space>
  )
}
