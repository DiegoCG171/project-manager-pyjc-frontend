import { AuthFormHeader } from "../components/AuthFormHeader";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <>
      <AuthFormHeader
        title="Bienvenido al Gestor de Proyectos."
        subtitle="Organiza, planifica y supervisa tus proyectos con eficiencia y colaboración."
      />
      <LoginForm />
    </>
  );
};
