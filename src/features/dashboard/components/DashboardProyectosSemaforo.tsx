import { useState } from "react";
import { Pie } from "@ant-design/plots";
import { Button, Space, Typography } from "antd";

const { Text } = Typography;

const dataPie = [
  { type: "Verde", value: 31 },
  { type: "Amarillo", value: 3 },
  { type: "Naranja", value: 1 },
  { type: "Rojo", value: 0 },
];

const pieConfig = {
  appendPadding: 10,
  data: dataPie,
  angleField: "value",
  colorField: "type",
  radius: 0.8,
  label: {
    type: "outer",
    content: "{percentage}",
  },
  interactions: [{ type: "element-active" }],
  tooltip: false,
};

export const DashboardProyectoSemaforo = () => {
  return (
    <div style={{ display: "flex", gap: 24, padding: 24, marginTop: 50 }}>
      <div style={{ flex: 1, maxWidth: 350 }}>
        <div style={{ marginBottom: 16 }}>
          <b>PROYECTOS POR SEMÁFORO - JULIO</b>
        </div>
        <Pie {...pieConfig} />
      </div>

      <div style={{ flex: 2 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text>PROYECTOS TOTALES: 3</Text>
          <Space>
            <Button>LIMPIAR FILTROS</Button>
            <Button>EXPORTAR</Button>
          </Space>
        </div>
      </div>
    </div>
  );
};
