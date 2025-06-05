import { Space, Typography } from "antd";
const { Title, Text } = Typography;

interface Props {
  title?: string;
  subtitle?: string;
}

export const AuthFormHeader = ({
  title = "Titulo",
  subtitle = "Subtitulo",
}: Props) => {
  return (
    <Space
      size={4}
      align="center"
      direction="vertical"
      style={{ marginBottom: 16, textAlign: "center", width: "100%" }}
    >
      <Title level={3} >{title}</Title>
      <Text type="secondary" >{subtitle}</Text>
    </Space>
  );
};
