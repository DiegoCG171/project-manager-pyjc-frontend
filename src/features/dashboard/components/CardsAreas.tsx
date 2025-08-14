import { useEffect } from "react";
import { Card, Typography, Button, Empty } from "antd";
import { AreasPorcentaje } from "./AreasPorcentaje";
import styles from "../styles/Dashboard-areas.module.css";
import { useSelector, useDispatch } from "react-redux";
import { type RootState } from "../../../store/store";
import { setAreas } from "../../../store/areasDashboard/areasSlice";
import { areasData as mockAreasData } from "../data/AreasData";

const { Text } = Typography;

export const CardsAreas = () => {
  const dispatch = useDispatch();
  const areasData = useSelector((state: RootState) => state.areas.data);

  useEffect(() => {
    if (areasData.length === 0) {
      dispatch(setAreas(mockAreasData));
    }
  }, [areasData.length, dispatch]);

  return (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", width: "100%" }}>
      {areasData.length === 0 ? (
        <Empty
          description="No hay áreas asignadas por el momento"
          style={{ marginTop: 40 }}
        />
      ) : (
        areasData.map((area, index) => (
          <Card key={index} className={styles.cardStyle}>
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
        ))
      )}
    </div>
  );
};
