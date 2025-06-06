import { ChangePasswordForm } from "../components/ChangePasswordForm";
import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";

export const ChangePassword = () => {
  return (
    <>
      <AuthFormHeader
        title="Crea una nueva contraseña"
        subtitle="Ingresa una nueva contraseña para recuperar el acceso a tu cuenta de P&JC."
      />

      <ChangePasswordForm />

      <AuthFormFooter
        question="¿Ya no quieres cambiarla?"
        navigatePath="auth/login"
        navigateText="Iniciar sesión"
      />
    </>
  );
};
