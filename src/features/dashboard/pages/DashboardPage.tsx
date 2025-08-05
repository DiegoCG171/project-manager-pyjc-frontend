import { Typography } from "antd";
import { BackButton } from "../../../shared/components/BackButton";
import { CardsAreas } from "../components/CardsAreas";
import { DashboardGrafica } from "../components/DashboardGrafica";
import { DashboardTabla } from "../components/DashboardTabla";

const { Title } = Typography;

export const DashboardPage = () => {
  return (
    <div style={{ padding: "30px 50px", height: '100vh', overflowY: 'auto', flex: 1 }}>
      <BackButton />
      <Title style={{ margin: '20px 0px 30px 0px' }} level={2}>Áreas</Title>
      <CardsAreas />
      <div style={{ display: "flex", gap: "24px" }}>
        <DashboardGrafica />
        <DashboardTabla />
      </div>
    </div>

  );
};
