import { Space, Typography } from "antd";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

interface Props {
  question?: string;
  navigateText?: string;
  navigatePath?: string;
}

export const AuthFormFooter = ({
  question = "¿Ya tienes cuenta?",
  navigatePath = "auth/login",
  navigateText = "Iniciar Sesión",
}: Props) => {
  const navigate = useNavigate();

  return (
    <Space>
      <Text type="secondary">{question}</Text>
      <Text
        style={{ fontWeight: 500, cursor: "pointer", userSelect: "none" }}
        onClick={() => navigate(`/${navigatePath}`)}
      >
        {navigateText}
      </Text>
    </Space>
  );
};