
import { AuthFormHeader } from "../components/AuthFormHeader";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  return (
    <div style={{width: "100%"}}>
      <AuthFormHeader
        title="Bienvenido al Gestor de Proyectos"
        subtitle="Administra con claridad cada etapa del proyecto, desde la planificación hasta la entrega, con enfoque en procesos bancarios exigentes y colaborativos."
      />
      <LoginForm />
    </div>
  );
};
