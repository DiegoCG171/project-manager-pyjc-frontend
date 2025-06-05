import { AuthFormFooter } from "../components/AuthFormFooter";
import { AuthFormHeader } from "../components/AuthFormHeader";
import { SendCodeForm } from "../components/SendCodeForm";

export const SendCodePage = () => {
  return (
    <>
      <AuthFormHeader title="Ingresa tu código" subtitle="Escribe el código de 6 dígitos que enviamos a tu correo electrónico para recuperar el control de tu cuenta." />
      <SendCodeForm />
      <AuthFormFooter question="¿Recordaste tu contraseña?" />
    </>
  );
};
