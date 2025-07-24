import { Card, Typography, Button } from "antd";
import { AreasPorcentaje } from "./AreasPorcentaje";
import styles from '../styles/Dashboard-areas.module.css'

const { Text } = Typography;

interface AreaCardData {
  nombreArea: string;
  responsable: string;
  porcentaje: number;
}

const areasData: AreaCardData[] = [
  { nombreArea: "QA", responsable: "Juan Sánchez", porcentaje: 55.0 },
  { nombreArea: "PROYECTOS ESPECIALES", responsable: "Juan Sánchez", porcentaje: 49.6 },
  { nombreArea: "CLAVES K", responsable: "Juan Sánchez", porcentaje: 62.2 },
  { nombreArea: "CLAVES L", responsable: "Juan Sánchez", porcentaje: 30.8 },
];

export const CardsAreas = () => {
  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {areasData.map((area, index) => (
        <Card key={index} className={styles.cardStyle} >
          <div className={styles.contentStyle}>
            <AreasPorcentaje porcentaje={area.porcentaje} />
          </div>
          <Text strong>{area.nombreArea}</Text>
          <br />
          <div style={{ margin: "10px 0px" }}>
            <Text>{area.responsable}</Text>
          </div>
          <Button type="primary" size="small">Ver todo</Button>
        </Card>
      ))}
    </div>
  );
};
