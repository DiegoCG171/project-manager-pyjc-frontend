import { Space } from "antd";
import { useBreakpoint } from "../../../hooks/useBreakpoint"
import { AuthFormHeader } from "../components/AuthFormHeader";
import { AuthFormFooter } from "../components/AuthFormFooter";
import { ChangePasswordForm } from "../components/ChangePasswordForm";

export const ChangePassPage = () => {
  const breakpoint = useBreakpoint();
  const smallScreen = ["xs", "sm"].includes(breakpoint)
  return (
    <Space direction="vertical" size={24} style={{width: smallScreen ? "80%" : "55%", marginTop: 24}}>
        <AuthFormHeader />
        <ChangePasswordForm />
        <AuthFormFooter />
    </Space>
  )
}
