import { Typography } from "antd";
import { BackButton } from "../../../shared/components/BackButton";
import { CardsAreas } from "../components/CardsAreas";
import { DashboardProyectoSemaforo } from "../components/DashboardProyectosSemaforo";

const { Title } = Typography;

export const DashboardPage = () => {
  return (
    <div style={{ marginLeft: 40, padding: 24, height: '100vh', overflowY: 'auto', flex: 1 }}>
      <BackButton />

      <Title style={{ margin: '20px 0px 30px 0px' }} level={2}>Áreas</Title>
      
      <CardsAreas />

      <DashboardProyectoSemaforo/>
    </div>

  );
};
