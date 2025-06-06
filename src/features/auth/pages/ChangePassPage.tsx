import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";
import { ChangePasswordForm } from "../components/ChangePasswordForm";

export const ChangePassPage = () => {
  return (
    <>
        <AuthFormHeader />
        <ChangePasswordForm />
        <AuthFormFooter />
    </>
  )
}
