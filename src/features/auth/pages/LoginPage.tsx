import { Space } from "antd";
import { useBreakpoint } from "../../../hooks/useBreakpoint"
import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";
import { LoginForm } from "../components/LoginForm";

export const LoginPage = () => {
  const breakpoint = useBreakpoint();
  const smallScreen = ["xs", "sm"].includes(breakpoint)
  return (
    <Space direction="vertical" size={24} style={{width: smallScreen ? "80%" : "55%", marginTop: 24}}>
        <AuthFormHeader />
        <LoginForm />
        <AuthFormFooter />
    </Space>
  )
}
