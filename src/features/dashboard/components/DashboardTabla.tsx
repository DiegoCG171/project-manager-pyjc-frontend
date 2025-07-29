import { Table, Button, Tag, Space, Typography } from "antd";
import type { ColumnsType } from "antd/es/table";
import { table as mockTable } from '../data/TableData';


const { Text } = Typography;

interface Proyecto {
  clave: string;
  nombre: string;
  semaforo: string;
  estatus: string;
  exitoso: string;
  avance: string;
  lider: string;
  pm: string;
  fechaInicio: string;
  fechaFin: string;
  orden: string;
  pagado: string;
  horas: number;
  consumidas: string;
}

const semaforoColor = (valor: string) => {
  switch (valor.toLowerCase()) {
    case "verde":
      return "green";
    case "amarillo":
      return "gold";
    case "naranja":
      return "orange";
    case "rojo":
      return "red";
    default:
      return "default";
  }
};

const columns: ColumnsType<Proyecto> = [
  { title: "CLAVE", dataIndex: "clave", key: "clave", width: 120, ellipsis: true },
  { title: "NOMBRE DEL PROYECTO", dataIndex: "nombre", key: "nombre", width: 220, ellipsis: true },
  {
    title: "SEMÁFORO",
    dataIndex: "semaforo",
    key: "semaforo",
    width: 100,
    render: (color: string) => (
      <Tag color={semaforoColor(color)}>{color.toUpperCase()}</Tag>
    ),
  },
  { title: "ESTATUS", dataIndex: "estatus", key: "estatus", width: 120, ellipsis: true },
  { title: "EXITOSO", dataIndex: "exitoso", key: "exitoso", width: 120, ellipsis: true },
  { title: "AVANCE DEL PROYECTO", dataIndex: "avance", key: "avance", width: 150, ellipsis: true },
  { title: "LÍDER DE PROYECTO", dataIndex: "lider", key: "lider", width: 150, ellipsis: true },
  { title: "P.M.", dataIndex: "pm", key: "pm", width: 150, ellipsis: true },
  { title: "FECHA INICIAL", dataIndex: "fechaInicio", key: "fechaInicio", width: 140, ellipsis: true },
  { title: "FECHA FINAL", dataIndex: "fechaFin", key: "fechaFin", width: 140, ellipsis: true },
  { title: "ORDEN DE COMPRA", dataIndex: "orden", key: "orden", width: 140, ellipsis: true },
  { title: "PAGADO", dataIndex: "pagado", key: "pagado", width: 120, ellipsis: true },
  { title: "HORAS", dataIndex: "horas", key: "horas", width: 100, ellipsis: true },
  { title: "HORAS CONSUMIDAS", dataIndex: "consumidas", key: "consumidas", width: 160, ellipsis: true },
  {
    title: "",
    key: "accion",
    fixed: "right",
    width: 80,
    render: () => <Button type="default">ABRIR</Button>,
  },
];



export const DashboardTabla = () => (
  <>
    <div
      style={{
        margin: "90px 16px 20px",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Text strong>PROYECTOS TOTALES: 37</Text>
      <Space>
        <Button>LIMPIAR FILTROS</Button>
        <Button>EXPORTAR</Button>
      </Space>
    </div>
    
    <Table
      columns={columns}
      dataSource={mockTable}
      scroll={{ x: 2000 }}
      pagination={false}
      size="middle"
      rowClassName={() => "compact-row"}
      bordered
    />
    <style>{`
      .compact-row td {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 1.5;
        height: 40px;
        vertical-align: middle;
      }
    `}</style>
  </>
);
