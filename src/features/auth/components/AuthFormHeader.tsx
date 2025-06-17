import { Space, Typography } from "antd";
import { useBreakpoint } from "../../../hooks/useBreakpoint";
const { Title, Text } = Typography;

interface Props {
  title?: string;
  subtitle?: string;
}

export const AuthFormHeader = ({
  title = "Titulo",
  subtitle = "Subtitulo",
}: Props) => {
  const breakpoint = useBreakpoint();
  const smallScreen = ["xs", "sm"].includes(breakpoint);
  return (
    <Space
      size={2}
      align="center"
      direction="vertical"
      style={{ marginBottom: 32, textAlign: "center", width: "100%" }}
    >
      <Title level={smallScreen ? 4 : 3}>{title}</Title>
      <Text type="secondary" >{subtitle}</Text>
    </Space>
  );
};
