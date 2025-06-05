import { ForgotPasswordForm } from "../components/ForgotPasswordForm";
import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";

export const ForgotPassword = () => {
  return (
    <>
      <AuthFormHeader
        title="¿Olvidate tu contraseña?"
        subtitle="Ingresa tu correo y te enviaremos un código de verificación de 6 dígitos para restablecer tu contraseña."
      />
      <ForgotPasswordForm />
      <AuthFormFooter
        question="¿Recuerdas tu contraseña?"
        navigatePath="auth/send-code"
      />
    </>
  );
};
