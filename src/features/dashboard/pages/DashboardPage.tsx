import { Card, Typography } from "antd";

const { Title, Paragraph } = Typography;

export const DashboardPage = () => {
  return (
    <div style={{ padding: "24px", width: "100%" }}>
      <Title level={2}>Dashboard</Title>
      <Paragraph>Bienvenido a la página de Dashboard.</Paragraph>

      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <Card title="Card 1" style={{ width: 300 }}>
          <p>Contenido de prueba para la card 1.</p>
        </Card>
        <Card title="Card 2" style={{ width: 300 }}>
          <p>Contenido de prueba para la card 2.</p>
        </Card>
        <Card title="Card 3" style={{ width: 300 }}>
          <p>Contenido de prueba para la card 3.</p>
        </Card>
      </div>
    </div>
  );
};
