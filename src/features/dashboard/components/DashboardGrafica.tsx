import { Pie } from "@ant-design/plots";
import { Typography } from "antd";

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

export const DashboardGrafica = () => {
  return (
    <div style={{ width: "50%"}}>
      <div>
        <div
          style={{
            margin: "90px 16px 10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Text strong>PROYECTOS POR SEMÁFORO - JULIO</Text>
        </div>

        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 400 }}>
            <Pie {...pieConfig} />
          </div>
        </div>
      </div>
    </div>
  );

};
